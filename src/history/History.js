import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Timeline from './timeline/Timeline';
import Code from './Code';
import Card from './Card';
import { Spin } from 'antd';
import './History.css';

function History(props) {
  const { store } = useContext(Context);
  const [versions, setVersions] = useState([]);
  const [selectedCommit, setSelectedCommit] = useState({});
  const [loading, setLoading] = useState(true);

  const dataAvailable = store.source.commitUrl !== '' && store.source.contentUrl !== '';

  useEffect(() => {
    async function fetchData() {
      if (dataAvailable) {
        try {
          const header = window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {};
          const commitListResp = await axios.get(store.source.commitUrl, {
            headers: header
          });
          const commits = commitListResp.data;

          const commitsResp = await Promise.all(
            commits.map(async commit => {
              return await axios.get(`${store.source.contentUrl}${commit.sha}`, {
                headers: header
              });
            })
          );

          const allCommits = commits.map((version, index) => ({
            ...version,
            name: commitsResp[index].data.name,
            content: commitsResp[index].data.content
          }));

          setVersions(allCommits);
          setSelectedCommit({ ...allCommits[0] });
          setLoading(false);

          // TODO: Remove
          const temp = await axios.get('https://api.github.com/rate_limit', {
            headers: header
          });
          console.log(temp.data.rate);
          // -----------
        } catch (e) {
          if (e.response.status === 401) {
            window.localStorage.clear();
            props.history.push('/auth');
          } else if (e.response.status === 403) {
            props.history.push('/auth');
          }
        }
      }
    }
    fetchData();
  }, [store.source.commitUrl, store.source.contentUrl, dataAvailable, props.history]);

  const selectCommit = sha => {
    setSelectedCommit(versions.find(version => version.sha === sha));
  };

  return (
    <>
      {!dataAvailable && <Redirect to="/" />}
      {loading ? (
        <div className="History-spinner-container">
          <Spin size="large" />
        </div>
      ) : (
        <div className="History-container">
          <div className="History-timeline">
            <Timeline
              displayAmount={6}
              versions={versions}
              selectedCard={selectedCommit.sha}
              selectCommit={selectCommit}
            />
          </div>
          <div className="History-code">
            <Code content={selectedCommit.content} language={selectedCommit.name.split('.').pop()} />
          </div>
          <div className="History-card History-info-card">
            <Card title="Info" color="#f5cba7" />
          </div>
          <div className="History-card History-changes-card">
            <Card title="Changes" color="#bb8fce" />
          </div>
        </div>
      )}
    </>
  );
}

export default History;
