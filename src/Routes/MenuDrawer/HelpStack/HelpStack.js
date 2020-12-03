import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Help } from '../../../Screens';
import { HeaderOptions } from '../../../Theme';

const Stack = createStackNavigator();

const HelpStack = () => {
  return (
    <Stack.Navigator initialRouteName="Help">
      <Stack.Screen
        name="Help"
        component={Help}
        options={({ navigation }) =>
          HeaderOptions.withMenu(navigation, 'Bantuan')}
      />
    </Stack.Navigator>
  );
};

export default HelpStack;
