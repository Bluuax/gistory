import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Search from './Search';
import History from './history/History';
import Stats from './stats/Stats';
import About from './About';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/history" component={History} />
      <Route exact path="/stats" component={Stats} />
      <Route exact path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
