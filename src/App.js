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
    const zenMessage = await axios.get('https://api.github.com/zen');
    message.info(zenMessage.data);
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
