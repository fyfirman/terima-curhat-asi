/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuDrawer from './MenuDrawer';
import { Login, ForgotPIN, Chat } from '../Screens';
import { HeaderOptions } from '../Theme';

const Stack = createStackNavigator();

const Routes = () => {
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
            options={{
              headerShown: false
            }}
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
            options={({ navigation }) =>
              HeaderOptions.withBack(navigation, 'Dessy')
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Routes;
