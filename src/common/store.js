import React from 'react';
export const initialState = { source: '' };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return { source: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
