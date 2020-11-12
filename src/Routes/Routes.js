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
import {
  Login,
  ForgotPIN,
  Chat,
  Invite,
  ProfileMom,
  ArticleViewer
} from '../Screens';
import { HeaderOptions } from '../Theme';
import { LoadingScreen } from '../Components';

const Stack = createStackNavigator();

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const Routes = (props) => {
  const { user } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
                HeaderOptions.withBack(navigation, 'Lupa PIN')
              }
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
              name="ArticleViewer"
              component={ArticleViewer}
              options={({ navigation }) =>
                HeaderOptions.withBack(navigation, 'Lihat artikel')
              }
            />
            <Stack.Screen
              name="Invite"
              component={Invite}
              options={({ navigation }) =>
                HeaderOptions.withBack(navigation, 'Tambahkan Bidan')
              }
            />
            <Stack.Screen
              name="ProfileMom"
              component={ProfileMom}
              options={({ navigation }) =>
                HeaderOptions.withBack(navigation, 'Profil Ibu & Keluarga')
              }
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
