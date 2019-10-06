import React from 'react';
export const initialState = { url: '', versions: {}, loggedIn: localStorage.token !== undefined };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setUrl':
      return { ...state, url: action.value };
    case 'setVersions':
      return { ...state, versions: action.value };
    case 'setLoggedIn':
      return { ...state, loggedIn: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
