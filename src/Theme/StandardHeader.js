import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './Colors';
import FontFamily from './FontFamily';

const ICON_SIZE = 35;

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

const StandartHeader = (navigation, title) => {
  return {
    title,
    headerStyle,
    headerTitleStyle,
    headerTintColor: 'white',
    headerLeft: () => (
      <Icon
        name="chevron-back-outline"
        onPress={() => navigation.goBack()}
        size={ICON_SIZE}
        color="white"
      />
    )
  };
};

export default StandartHeader;
