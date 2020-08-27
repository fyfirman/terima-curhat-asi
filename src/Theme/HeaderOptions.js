import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './Colors';
import FontFamily from './FontFamily';

const ICON_SIZE = 30;

const headerStyle = {
  backgroundColor: Colors.persianPink,
  elevation: 0,
  shadowOpacity: 0,
  borderBottomWidth: 0
};

const headerTitleStyle = {
  fontFamily: FontFamily.Muli.bold,
  textAlign: 'center',
  marginLeft: -(ICON_SIZE + 15)
};

const iconStyle = {
  marginLeft: 8
};

const withBack = (navigation, title) => {
  return {
    title,
    headerStyle,
    headerTitleStyle,
    headerTintColor: 'white',
    headerLeft: () => (
      <Icon
        name="chevron-back-outline"
        onPress={() => navigation.goBack()}
        style={iconStyle}
        size={ICON_SIZE}
        color="white"
      />
    )
  };
};

const withMenu = (navigation, title) => {
  return {
    title,
    headerStyle,
    headerTitleStyle,
    headerTintColor: 'white',
    headerLeft: () => (
      <Icon
        name="menu-outline"
        onPress={() => navigation.openDrawer()}
        style={iconStyle}
        size={ICON_SIZE}
        color="white"
      />
    )
  };
};

const HeaderOptions = {
  withBack,
  withMenu
};

export default HeaderOptions;
