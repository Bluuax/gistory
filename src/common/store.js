import React from 'react';
export const initialState = { source: { url: '', commitUrl: '', contentUrl: '' } };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setSource':
      return { source: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
