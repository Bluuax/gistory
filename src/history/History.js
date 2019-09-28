import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Timeline from './timeline/Timeline';
import Code from './Code';
import Card from './Card';
import { Spin } from 'antd';
import './History.css';
import Authentication from '../common/Authentication';

function History() {
  const { store } = useContext(Context);
  const [versions, setVersions] = useState([]);
  const [selectedCommit, setSelectedCommit] = useState({});
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState();

  const dataAvailable = store.source.commitUrl !== '' && store.source.contentUrl !== '';

  useEffect(() => {
    async function fetchData() {
      if (dataAvailable) {
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

          const allCommits = commits.map((version, index) => ({
            ...version,
            content: commitsResp[index].data.content
          }));

          setVersions(allCommits);
          setSelectedCommit({ ...allCommits[0] });

          // TODO: Remove
          // const temp = await axios.get('https://api.github.com/rate_limit', {
          //   headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
          // });
          // console.log(temp.data.rate);
          // -----------
        } catch (e) {
          setStatus(e);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchData();
  }, [dataAvailable, store.source.commitUrl, store.source.contentUrl]);

  const selectCommit = sha => {
    setSelectedCommit(versions.find(version => version.sha === sha));
  };

  const handleError = () => {
    if (status.response.status === 403) {
      return <Authentication />;
    }
  };

  return (
    <>
      {!dataAvailable && <Redirect to="/" />}
      {loading ? (
        <div className="History-spinner-container">
          <Spin size="large" />
        </div>
      ) : status === undefined ? (
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
            <Card title="Changes" color="#bb8fce" />
          </div>
        </div>
      ) : (
        handleError()
      )}
    </>
  );
}

export default History;
