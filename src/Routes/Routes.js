/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SessionAction } from '../Redux/Actions';
import MenuDrawer from './MenuDrawer';
import ProfileMomTabNav from './ProfileMomTabNav';
import { Login, ForgotPIN, Chat, Invite } from '../Screens';
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
    setIsLoaded(true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isLoaded ? (
        <LoadingScreen message="Memuat data" />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={
              Object.keys(user).length !== 0 ? 'ProfileMom' : 'Login'
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
              component={ProfileMomTabNav}
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
