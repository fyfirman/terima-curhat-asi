import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../../Screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
