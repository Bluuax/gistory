import React from 'react';
export const initialState = { url: '', versions: {}, loggedIn: localStorage.token };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setUrl':
      return { url: action.value, versions: state.versions, loggedIn: state.loggedIn };
    case 'setVersions':
      return { url: state.url, versions: action.value, loggedIn: state.loggedIn };
    case 'setLoggedIn':
      return { url: state.url, versions: state.versions, loggedIn: localStorage.token };
    default:
      return state;
  }
};

export const Context = React.createContext();
