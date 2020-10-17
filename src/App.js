/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View, StatusBar, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { LoadingScreen } from './Components';
import store, { persistor } from './Redux/store';
import Routes from './Routes';
import { Colors } from './Theme';

const App = () => {
  const theme = {
    ...DefaultTheme,
    mode: 'exact'
  };

  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer']);
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingScreen message="Mohon tunggu" />}
        persistor={persistor}
      >
        <PaperProvider theme={theme}>
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
