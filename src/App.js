import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './common/store';
import { ThemeProvider } from './common/contexts/ThemeContext';
import PageContent from './PageContent';
import Navbar from './Navbar';
import EasterEgg from './EasterEgg';
import Routes from './Routes';

/**
 * Central component of the React-App.
 * Wraps the Context.Provider (global state) and the Theme around the entire components.
 */
function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Routes />
        </PageContent>
      </ThemeProvider>
      <EasterEgg />
    </Context.Provider>
  );
}

export default App;
