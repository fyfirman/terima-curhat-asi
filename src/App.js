/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import {
  Provider as PaperProvider,
  ActivityIndicator
} from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import store, { persistor } from './Redux/store';
import Routes from './Routes';
import { Colors } from './Theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator animating color="white" size="large" />
          </View>
        }
        persistor={persistor}
      >
        <PaperProvider>
          <View style={{ flex: 1 }}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={Colors.cranberry}
            />
            <Routes />
          </View>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
