/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import Pusher from 'pusher-js/react-native';
import Echo from 'laravel-echo';
import { LoadingScreen } from './Components';
import store, { persistor } from './Redux/store';
import Routes from './Routes';
import { Colors } from './Theme';

const App = () => {
  useEffect(() => {
    Pusher.logToConsole = true;

    const PusherClient = new Pusher('8ce4048a46a0c08c9cd8', {
      cluster: 'ap1',
      wsHost: '192.168.1.11',
      wsPort: '8000',
      enabledTransports: ['ws'],
      forceTLS: false
    });

    const echo = new Echo({
      broadcaster: 'pusher',
      client: PusherClient
    });

    echo.private(`consultations.${2}`).notification((data) => {
      console.log(data);
    });

    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingScreen message="Mohon tunggu" />}
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
