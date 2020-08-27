import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuDrawer from './MenuDrawer';
import { Login, ForgotPIN } from '../Screens';
import { HeaderOptions } from '../Theme';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MenuDrawer"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPIN" component={ForgotPIN} />
          <Stack.Screen name="MenuDrawer" component={MenuDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Routes;
