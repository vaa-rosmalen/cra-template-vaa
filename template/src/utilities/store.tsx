import React, { createContext, useReducer } from 'react';
import produce from 'immer';

const ContextStore = createContext<any>(null);

const initialState = {
  language: 'nl'
};

const reducer = (state, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'reset':
        return initialState;
      case 'changeLanguage':
        draft.language = action.language;
        break;
      default:
        draft[action.group] = action.data;
        // eslint-disable-next-line no-console
        console.log('No dedicated dispatcher, using default', action.type);
        break;
    }
  });
};

const ContextStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  const value = { state, dispatch };

  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
};

const ContextStoreConsumer = ContextStore.Consumer;

export { ContextStore, ContextStoreProvider, ContextStoreConsumer };
