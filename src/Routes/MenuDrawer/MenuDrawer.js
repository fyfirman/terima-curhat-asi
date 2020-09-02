import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './CustomDrawer';
import ConsultationTab from './ConsultationTab';
import HomeStack from './HomeStack';
import ArticleStack from './ArticleStack';
import { Colors } from '../../Theme';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const getDrawerIcon = (name, focused, size) => (
    <Icon
      color={focused ? Colors.java : Colors.textPrimary}
      size={size}
      name={name}
    />
  );

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused, size }) =>
            getDrawerIcon(focused ? 'home' : 'home-outline', focused, size)
        }}
      />
      <Drawer.Screen
        name="Consultation"
        component={ConsultationTab}
        options={{
          drawerIcon: ({ focused, size }) =>
            getDrawerIcon(
              focused ? 'chatbubbles' : 'chatbubbles-outline',
              focused,
              size
            )
        }}
      />
      <Drawer.Screen
        name="Article"
        component={ArticleStack}
        options={{
          drawerIcon: ({ focused, size }) =>
            getDrawerIcon(
              focused ? 'newspaper' : 'newspaper-outline',
              focused,
              size
            )
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
