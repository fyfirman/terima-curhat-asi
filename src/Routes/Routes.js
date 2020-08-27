import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuDrawer from './MenuDrawer';
import { Login, ForgotPIN } from '../Screens';
import { StandardHeader } from '../Theme';

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
            options={({ navigation }) => StandardHeader(navigation, 'Lupa Pin')}
          />
          <Stack.Screen
            name="MenuDrawer"
            component={MenuDrawer}
            options={({ navigation }) =>
              StandardHeader(navigation, 'Terima Curhat ASI')
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Routes;
