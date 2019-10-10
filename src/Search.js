import React, { useState, useContext } from 'react';
import { Context } from './common/store';
import axios from 'axios';
import Footer from './Footer';
import { genericColor, randomColor } from './common/helpers';
import { Spin, Input, Button, Modal } from 'antd';
import './Search.css';

function Search(props) {
  const { store, dispatch } = useContext(Context);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    try {
      const splits = input.split('github.com/')[1].split('/');
      const url = input;
      const owner = splits[0];
      const repo = splits[1];
      const branch = splits[3];
      const path = splits.slice(4).join('/');

      if (url === '' || owner === '' || repo === '' || branch === '' || path === '') {
        throw error;
      }

      fetchData(url, owner, repo, branch, path);
    } catch (e) {
      error('Houston, we have a problem...', `We searched everywhere and yet we still could not find your file...`);
    }
  };

  const handleDemo = () => {
    const url = 'https://github.com/Bluuax/gistory/blob/master/src/App.js';
    const owner = 'Bluuax';
    const repo = 'gistory';
    const branch = 'master';
    const path = 'src/App.js';

    fetchData(url, owner, repo, branch, path);
  };

  const fetchData = async (url, owner, repo, branch, path) => {
    setLoading(true);
    const commitUrl = `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&path=${path}`;
    const contentUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=`;
    const authHeader = window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {};

    try {
      const commitListResp = await axios.get(commitUrl, {
        headers: authHeader
      });
      const commits = commitListResp.data;

      const commitsResp = await Promise.all(
        commits.map(async commit => {
          return await axios.get(`${contentUrl}${commit.sha}`, {
            headers: authHeader
          });
        })
      );

      const allCommits = commits.map((version, index) => ({
        ...version,
        name: commitsResp[index].data.name,
        content: commitsResp[index].data.content
      }));

      const authors = commits.map(version => version.commit.author.name);
      let uniqueAuthors = {};
      authors.forEach(author => {
        uniqueAuthors[author] = (uniqueAuthors[author] || 0) + 1;
      });

      const uniqueAuthorNames = Object.keys(uniqueAuthors);
      const uniqueAuthorCounts = Object.values(uniqueAuthors);

      let backgroundColors = [];
      uniqueAuthorNames.forEach((author, i) => {
        i <= 6 ? backgroundColors.push(genericColor()[i]) : backgroundColors.push(randomColor());
      });

      dispatch({
        type: 'setUrl',
        value: url
      });
      dispatch({
        type: 'setVersions',
        value: allCommits
      });
      dispatch({
        type: 'setChartData',
        value: {
          labels: uniqueAuthorNames,
          datasets: [
            {
              label: 'Commits',
              data: uniqueAuthorCounts,
              backgroundColor: backgroundColors
            }
          ]
        }
      });

      // TODO: Temp - Remove after development
      const temp = await axios.get('https://api.github.com/rate_limit', {
        headers: authHeader
      });
      console.log(temp.data.rate);
      // -------------------------------------

      props.history.push('/history');
    } catch (e) {
      if (e.response) {
        const resp = await axios.get('https://api.github.com/rate_limit');
        const resetTime = new Date(resp.data.rate.reset * 1000).toLocaleTimeString();

        if (e.response.status === 401) {
          window.localStorage.clear();
          dispatch({
            type: 'setLoggedIn',
            value: false
          });
          error(
            'Houston, we have a problem...',
            `Looks like you exceeded the limitations of the GitHubs-API. Sign in with your Github-Account and get 5000 API-Calls per hour. 
            Otherwise it resets at: ${resetTime}`
          );
        } else if (e.response.status === 403) {
          error(
            'Houston, we have a problem...',
            `Looks like you exceeded the limitations of the GitHubs-API. Sign in with your Github-Account and get 5000 API-Calls per hour. 
            Otherwise it resets at: ${resetTime}`
          );
        } else {
          error('Well... This is awkward', `Looks like we've stumbled upon a mysterious ${e}`);
        }
      }
      setLoading(false);
    }
  };

  function error(title, content) {
    Modal.error({
      title: title,
      content: content
    });
  }

  return (
    <div className="Search">
      {loading ? (
        <div className="Search-spinner-container">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <h1 className="Search-title">Gistory</h1>
          <Input
            size="large"
            value={input}
            onChange={handleChange}
            placeholder={store.url !== '' ? store.url : 'GitHub-URL'}
          />
          <div>
            <Button type="primary" onClick={handleClick}>
              Go
            </Button>
            <Button onClick={handleDemo}>Demo</Button>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Search;
