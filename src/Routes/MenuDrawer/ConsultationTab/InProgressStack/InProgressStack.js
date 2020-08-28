import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InProgress } from '../../../../Screens/Consultation';
import { HeaderOptions } from '../../../../Theme';

const Stack = createStackNavigator();

const InProgressStack = () => {
  return (
    <Stack.Navigator initialRouteName="InProgress">
      <Stack.Screen
        name="InProgress"
        component={InProgress}
        options={({ navigation }) =>
          HeaderOptions.withMenu(navigation, 'Terima Curhat ASI')}
      />
    </Stack.Navigator>
  );
};

export default InProgressStack;
