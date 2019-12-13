import React, { useState, useContext } from 'react';
import { Context } from '../common/store';
import { ThemeContext } from '../common/contexts/ThemeContext';
import { Redirect } from 'react-router-dom';
import Timeline from './timeline/Timeline';
import Code from './Code';
import './History.css';

/**
 * Renders a grid container for the following components: Timeline and Code.
 * Only renders if a file has been chosen, otherwise it redirects to the Search component.
 */
function History() {
  const { store } = useContext(Context);
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedCommit, setSelectedCommit] = useState({ ...store.versions[0] });

  /**
   * Finds the commit selected by the User from the list of commits and sets that particular commit into the state.
   *
   * @param {string} sha - ID of the commit
   */
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
            <h1 className="History-title-style" style={{ color: isDarkMode ? 'white' : 'black' }}>
              {selectedCommit.name}
            </h1>
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
