import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { History } from '../../../../Screens/Consultation';
import { HeaderOptions } from '../../../../Theme';

const Stack = createStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="InProgress">
      <Stack.Screen
        name="InProgress"
        component={History}
        options={({ navigation }) =>
          HeaderOptions.withMenu(navigation, 'Terima Curhat ASI')}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
