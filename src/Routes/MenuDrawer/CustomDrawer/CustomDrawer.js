import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
  const { ...rest } = props;

  // const getIconName = routeName;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Keluar"
        onPress={() => {}}
        icon={({ focused, color, size }) => (
          <Icon color={color} size={size} name="log-out-outline" />
        )}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
