import React, { useContext } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import './Stats.css';

function Stats() {
  const { store } = useContext(Context);
  return (
    <>
      {store.url === '' ? (
        <Redirect to="/" />
      ) : (
        <div className="Stats">
          <h1>Stats</h1>
        </div>
      )}
    </>
  );
}

export default Stats;
