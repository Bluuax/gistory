import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './common/store';
import Navbar from './Navbar';
import EasterEgg from './EasterEgg';
import Routes from './Routes';
import './App.css';

/**
 * Central component of the React-App.
 * Wraps the Context.Provider (global state) around the entire components.
 */
function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <EasterEgg />
        <Routes />
      </div>
    </Context.Provider>
  );
}

export default App;
