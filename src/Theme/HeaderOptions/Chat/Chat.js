import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import * as styles from './styles';

const Chat = (navigation, title, menu) => ({
  title,
  headerStyle: styles.headerStyle,
  headerTitleStyle: styles.headerTitleStyle,
  headerTintColor: 'white',
  headerLeft: () => (
    <TouchableOpacity
      style={styles.headerLeft}
      onPress={() => navigation.goBack()}
    >
      <Icon
        name="chevron-back-outline"
        style={styles.backIcon}
        size={30}
        color="white"
      />
      <Avatar.Image size={36} label="D" style={styles.avatar} />
    </TouchableOpacity>
  ),
  headerRight: () => menu
});

export default Chat;
