/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import Localization from './components/Localization';
import Routes from './Routes';
import { persistor, store } from './store';

const Main = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#fff" style="dark" />
        <Localization />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default Main;
