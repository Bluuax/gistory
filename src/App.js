import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './common/store';
import { Switch, Route } from 'react-router-dom';
import Konami from 'react-konami-code';
import axios from 'axios';
import Navbar from './Navbar';
import Search from './Search';
import History from './history/History';
import Authentication from './common/Authentication';
import About from './About';
import { message } from 'antd';
import './App.css';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  const easterEgg = async () => {
    const zenMessage = await axios.get('https://api.github.com/zen');
    message.info(zenMessage.data);
  };

  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/history" component={History} />
          <Route exact path="/tutorial" component={Authentication} />
          <Route exact path="/about" component={About} />
          <Route component={Search} />
        </Switch>
        <Konami action={easterEgg} />
      </div>
    </Context.Provider>
  );
}

export default App;
