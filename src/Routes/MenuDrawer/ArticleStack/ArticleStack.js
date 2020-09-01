import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Article } from '../../../Screens';
import { HeaderOptions } from '../../../Theme';

const Stack = createStackNavigator();

const ArticleStack = () => {
  return (
    <Stack.Navigator initialRouteName="Article">
      <Stack.Screen
        name="Article"
        component={Article}
        options={({ navigation }) =>
          HeaderOptions.withMenu(navigation, 'Artikel')}
      />
    </Stack.Navigator>
  );
};

export default ArticleStack;
