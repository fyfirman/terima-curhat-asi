/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/store';
import Container from './src/Container';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
