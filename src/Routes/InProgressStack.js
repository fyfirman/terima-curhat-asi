import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuDrawer from './MenuDrawer';
import { Login, ForgotPIN } from '../Screens';
import { HeaderOptions } from '../Theme';

const Stack = createStackNavigator();

const InProgressStack = () => {
  return (
    <Stack.Navigator initialRouteName="InProgress">
      <Stack.Screen
        name="InProgress"
        component={Login}
        options={({ navigation }) =>
          HeaderOptions.withMenu(navigation, 'Terima Curhat ASI')
        }
      />
    </Stack.Navigator>
  );
};

export default InProgressStack;
