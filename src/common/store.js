import React from 'react';
export const initialState = { url: '', versions: {}, chartData: {}, loggedIn: localStorage.token !== undefined };

/**
 * Global store for the app and all function based components.
 *
 * @param {*} state - Current global state
 * @param {*} action - Name and value of the desired operation
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case 'setUrl':
      return { ...state, url: action.value };
    case 'setVersions':
      return { ...state, versions: action.value };
    case 'setChartData':
      return { ...state, chartData: action.value };
    case 'setLoggedIn':
      return { ...state, loggedIn: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
