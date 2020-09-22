/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { bindActionCreators } from 'redux';
import Pusher from 'pusher-js/react-native';
import Echo from 'laravel-echo';
import { connect } from 'react-redux';
import { SessionAction } from '../Redux/Actions';
import MenuDrawer from './MenuDrawer';
import { Login, ForgotPIN, Chat, Invite, ProfileMom } from '../Screens';
import { HeaderOptions } from '../Theme';
import { LoadingScreen } from '../Components';

const Stack = createStackNavigator();

const propTypes = {
  session: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const Routes = (props) => {
  const { session, user } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      Pusher.logToConsole = true;

      console.log(`${session.tokenType} ${session.accessToken}`);

      const PusherClient = new Pusher('412261949086f4ad815a', {
        cluster: 'ap1',
        forceTLS: true,
        authEndpoint: 'http://192.168.1.11:4000/api/pusher/auth',
        auth: {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `${session.tokenType} ${session.accessToken}`
          }
        }
      });

      const echo = new Echo({
        broadcaster: 'pusher',
        client: PusherClient
      });

      echo.private('chat').listen('ConsultationPostSent', (data) => {
        console.log('Data pusher : ', data);
      });
    }

    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isLoaded ? (
        <LoadingScreen message="Memuat data" />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={
              Object.keys(user).length !== 0 ? 'MenuDrawer' : 'Login'
            }
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="ForgotPIN"
              component={ForgotPIN}
              options={({ navigation }) =>
                HeaderOptions.withBack(navigation, 'Lupa PIN')}
            />
            <Stack.Screen
              name="MenuDrawer"
              component={MenuDrawer}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Invite"
              component={Invite}
              options={({ navigation }) =>
                HeaderOptions.withBack(navigation, 'Tambahkan Bidan')}
            />
            <Stack.Screen
              name="ProfileMom"
              component={ProfileMom}
              options={({ navigation }) =>
                HeaderOptions.withBack(navigation, 'Profil Ibu & Keluarga')}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};

Routes.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    session: state.session,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(SessionAction, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
