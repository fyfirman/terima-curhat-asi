import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ConsultationTab from './ConsultationTab';
import HomeStack from './HomeStack';
import ArticleStack from './ArticleStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Consultation" component={ConsultationTab} />
      <Drawer.Screen name="Article" component={ArticleStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
