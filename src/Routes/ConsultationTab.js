import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Consultation } from '../Screens';

const Tab = createMaterialBottomTabNavigator();

const ConsultationTab = () => {
  return (
    <Tab.Navigator initialRouteName="New">
      <Tab.Screen name="New" component={Consultation} />
      <Tab.Screen name="InProgress" component={Consultation} />
      <Tab.Screen name="History" component={Consultation} />
    </Tab.Navigator>
  );
};

export default ConsultationTab;
