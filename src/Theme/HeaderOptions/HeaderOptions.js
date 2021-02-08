import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as styles from './styles';

const ICON_SIZE = 30;

const withBack = (navigation, title) => {
  return {
    title,
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerTintColor: 'white',
    headerLeft: () => (
      <Icon
        name="chevron-back-outline"
        onPress={() => navigation.goBack()}
        style={styles.iconStyle}
        size={ICON_SIZE}
        color="white"
      />
    )
  };
};

const withMenu = (navigation, title) => {
  return {
    title,
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerTintColor: 'white',
    headerLeft: () => (
      <Icon
        name="menu-outline"
        onPress={() => navigation.openDrawer()}
        style={styles.iconStyle}
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
