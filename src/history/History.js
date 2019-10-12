import React, { useState, useContext } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import Timeline from './timeline/Timeline';
import Code from './Code';
import './History.css';

/**
 * Renders a grid container for the following components: TimeLine and Code.
 * Only renders id a file has been chosen, otherwise it redirects to the Search component.
 */
function History() {
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
        <div className="History">
          <div className="History-title">
            <h1 className="History-title-style">{selectedCommit.name}</h1>
          </div>
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
