import React, { useContext } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';

function Stats() {
  const { store } = useContext(Context);
  return <>{store.url === '' ? <Redirect to="/" /> : <h1>Stats</h1>}</>;
}

export default Stats;
