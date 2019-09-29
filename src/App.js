import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './common/store';
import Konami from 'react-konami-code';
import axios from 'axios';
import Navbar from './Navbar';
import Routes from './Routes';
import { message } from 'antd';
import './App.css';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  const easterEgg = async () => {
    let zenMessage;
    try {
      const resp = await axios.get('https://api.github.com/zen');
      zenMessage = resp.data;
    } catch (e) {
      zenMessage = 'Wambo';
    }
    message.info(zenMessage);
  };

  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Konami action={easterEgg} />
        <Routes />
      </div>
    </Context.Provider>
  );
}

export default App;
