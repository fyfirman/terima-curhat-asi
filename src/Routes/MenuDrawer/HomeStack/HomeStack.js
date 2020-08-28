import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../../Screens';
import { HeaderOptions } from '../../../Theme';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) =>
          HeaderOptions.withMenu(navigation, 'Terima Curhat ASI')}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
