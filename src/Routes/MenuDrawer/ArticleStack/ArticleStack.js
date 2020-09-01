import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Article } from '../../../Screens';

const Stack = createStackNavigator();

const ArticleStack = () => {
  return (
    <Stack.Navigator initialRouteName="Article">
      <Stack.Screen
        name="Article"
        component={Article}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default ArticleStack;
