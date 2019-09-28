import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Timeline from './timeline/Timeline';
import Code from './Code';
import Card from './Card';
import { Spin } from 'antd';
import './History.css';

function History() {
  const { store } = useContext(Context);
  const [versions, setVersions] = useState([]);
  const [selectedCommit, setSelectedCommit] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const commitListResp = await axios.get(store.source.commitUrl, {
          headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
        });
        const commits = commitListResp.data;

        const commitsResp = await Promise.all(
          commits.map(async commit => {
            return await axios.get(`${store.source.contentUrl}${commit.sha}`, {
              headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
            });
          })
        );

        const allCommits = commits.map((version, index) => ({ ...version, content: commitsResp[index].data.content }));

        setVersions(allCommits);
        setSelectedCommit({ ...allCommits[0] });
        setLoading(false);

        // TODO: Temp
        const temp = await axios.get('https://api.github.com/rate_limit', {
          headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
        });
        console.log(temp.data.rate);
      } catch (e) {
        console.error(`ERROR: ${e}`);
      }
    }
    fetchData();
  }, [store.source.commitUrl, store.source.contentUrl]);

  const selectCommit = sha => {
    setSelectedCommit(versions.find(version => version.sha === sha));
  };

  return (
    <React.Fragment>
      {store.source.commitUrl === '' && store.source.contentUrl === '' && <Redirect to="/" />}
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
            <Code content={selectedCommit.content} language="jsx" /> {/* TODO: Dynamisch ermitteln */}
          </div>
          <div className="History-card History-info-card">
            <Card title="Info" color="#f5cba7" />
          </div>
          <div className="History-card History-changes-card">
            <Card title="Changes" color="#bb8fce" /> {/* TODO: Modaler Dialog - See all changes */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default History;
