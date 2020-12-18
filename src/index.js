import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Localization from './components/Localization';
import Routes from './Routes';
import { persistor, store } from './store';

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Localization />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default Main;
