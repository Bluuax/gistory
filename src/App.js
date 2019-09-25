import React, { useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Search from './Search';
import History from './history/History';
import Authentication from './common/Authentication';
import About from './About';
import NotFound from './NotFound';
import './App.css';

import { Context, initialState, reducer } from './common/store';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route exact path="/history" component={History}></Route>
          <Route exact path="/tutorial" component={Authentication}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;
