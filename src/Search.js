import React, { useState, useContext } from 'react';
import { Context } from './common/store';
import Footer from './Footer';
import { Input, Button, notification } from 'antd';
import './Search.css';

function Search(props) {
  const [input, setInput] = useState('');
  const { store } = useContext(Context);
  const { dispatch } = useContext(Context);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    try {
      const splits = input.split('github.com/')[1].split('/');
      const owner = splits[0];
      const repo = splits[1];
      const branch = splits[3];
      const path = splits.slice(4).join('/');

      loading(owner, repo, branch, path);
    } catch (e) {
      openNotification();
    }
  };

  const handleDemo = () => {
    const owner = 'Bluuax';
    const repo = 'gistory';
    const branch = 'master';
    const path = 'src/App.js';

    loading(owner, repo, branch, path);
  };

  const loading = (owner, repo, branch, path) => {
    const source = {
      url: input,
      commitUrl: `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&path=${path}`,
      contentUrl: `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=`
    };

    dispatch({
      type: 'setSource',
      value: source
    });

    props.history.push('/history');
  };

  const openNotification = () => {
    notification.open({
      message: 'Houston, we have a problem',
      description: `We searched everywhere and we still could not find your file...`
    });
  };

  return (
    <div className="Search">
      <h1 className="Search-title">Gistory</h1>
      <h3>Type the GitHub URL into the Textbox</h3>
      <Input
        size="large"
        value={input}
        onChange={handleChange}
        placeholder={store.source.url !== '' ? store.source.url : 'GitHub-URL'}
      />
      <div>
        <Button onClick={handleClick} type="primary">
          Go
        </Button>
        <Button onClick={handleDemo}>Demo</Button>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
