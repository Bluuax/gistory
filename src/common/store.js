import React from 'react';
export const initialState = { url: '', versions: {} };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setUrl':
      return { url: action.value, versions: state.versions };
    case 'setVersions':
      return { url: state.url, versions: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
