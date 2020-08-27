import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ConsultationTab from './ConsultationTab';
import { HeaderOptions } from '../Theme';
import { Consultation } from '../Screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={ConsultationTab} />
      <Drawer.Screen name="Consultation" component={Consultation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
