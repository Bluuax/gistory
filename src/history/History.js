import React, { useState, useContext } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import Timeline from './timeline/Timeline';
import Code from './Code';
import './History.css';

function History(props) {
  const { store } = useContext(Context);
  const [selectedCommit, setSelectedCommit] = useState({ ...store.versions[0] });

  const selectCommit = sha => {
    setSelectedCommit(store.versions.find(version => version.sha === sha));
  };

  return (
    <>
      {store.url === '' ? (
        <Redirect to="/" />
      ) : (
        <div className="History-container">
          <div className="History-timeline">
            <Timeline
              displayAmount={6}
              versions={store.versions}
              selectedCard={selectedCommit.sha}
              selectCommit={selectCommit}
            />
          </div>
          <div className="History-code">
            <Code content={selectedCommit.content} language={selectedCommit.name.split('.').pop()} />
          </div>
        </div>
      )}
    </>
  );
}

export default History;
