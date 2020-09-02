import React from 'react';
import { View } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import * as styles from './styles';
import { Colors } from '../../../Theme';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.root}>
      <View style={styles.userInfoSection}>
        <Avatar.Image
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg'
          }}
          size={50}
        />
        <Title style={styles.title}>Dawid Urbaniak</Title>
        <Caption style={styles.caption}>@trensik</Caption>
      </View>
      <DrawerItemList
        {...props}
        style={styles.menuItems}
        labelStyle={styles.labelStyle}
        activeTintColor={Colors.java}
        inactiveTintColor={Colors.textPrimary}
      />
      <View style={styles.footer}>
        <DrawerItem
          label="Keluar"
          onPress={() => {}}
          style={styles.signOutItem}
          labelStyle={styles.labelStyle}
          activeTintColor={Colors.java}
          inactiveTintColor={Colors.textPrimary}
          icon={({ color, size }) => (
            <Icon color={color} size={size} name="log-out-outline" />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
