/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, FontFamily } from '../../../Theme';
import InProgressStack from './InProgressStack';
import HistoryStack from './HistoryStack';
import NewStack from './NewStack';

const Tab = createMaterialBottomTabNavigator();

const ConsultationTab = () => {
  const getLabel = (route) => {
    let labelName;
    switch (route.name) {
      case 'New':
        labelName = 'Baru';
        break;
      case 'InProgress':
        labelName = 'Sedang Berjalan';
        break;
      case 'History':
        labelName = 'History';
        break;
      default:
        break;
    }
    return (
      <Text style={{ fontFamily: FontFamily.OpenSans.regular }}>
        {labelName}
      </Text>
    );
  };

  const getTabBarIcon = (route, { color }) => {
    let iconName;
    switch (route.name) {
      case 'New':
        iconName = 'notifications';
        break;
      case 'InProgress':
        iconName = 'chatbubbles';
        break;
      case 'History':
        iconName = 'hourglass';
        break;
      default:
        break;
    }
    return <Icon name={iconName} size={25} color={color} />;
  };

  return (
    <Tab.Navigator
      initialRouteName="New"
      activeColor={Colors.java}
      inactiveColor={Colors.textSecondary}
      barStyle={{
        backgroundColor: Colors.bottomTabs,
        borderTopWidth: 0.5,
        borderColor: Colors.bottomTabsBorder
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: getLabel(route),
        tabBarIcon: (options) => getTabBarIcon(route, options)
      })}
    >
      <Tab.Screen name="New" component={NewStack} />
      <Tab.Screen name="InProgress" component={InProgressStack} />
      <Tab.Screen name="History" component={HistoryStack} />
    </Tab.Navigator>
  );
};

export default ConsultationTab;
