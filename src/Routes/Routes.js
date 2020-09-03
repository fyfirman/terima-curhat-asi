/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SessionAction } from '../Redux/Actions';
import MenuDrawer from './MenuDrawer';
import { Login, ForgotPIN, Chat, Invite } from '../Screens';
import { HeaderOptions } from '../Theme';

const Stack = createStackNavigator();

const propTypes = {
  session: PropTypes.objectOf(PropTypes.any).isRequired
};

const Routes = (props) => {
  const { session } = props;

  useEffect(() => {
    console.log(session);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
            name="Invite"
            component={Invite}
            options={({ navigation }) =>
              HeaderOptions.withBack(navigation, 'Tambahkan Bidan')
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

Routes.propTypes = propTypes;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    session: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(SessionAction, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
