import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { New } from '../../../../Screens/Consultation';
import { HeaderOptions } from '../../../../Theme';

const Stack = createStackNavigator();

const NewStack = () => {
  return (
    <Stack.Navigator initialRouteName="New">
      <Stack.Screen
        name="New"
        component={New}
        options={({ navigation }) =>
          HeaderOptions.withMenu(navigation, 'Konsultasi')
        }
      />
    </Stack.Navigator>
  );
};

export default NewStack;
