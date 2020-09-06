import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar, Avatar, Menu, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ChatAppBar = (props) => {
  const { navigation } = props;

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((value) => !value);
  };
  return (
    <Appbar style={styles.headerStyle}>
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
        <Avatar.Text
          size={36}
          label="D"
          labelStyle={styles.labelStyle}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <Appbar.Content
        title="Dessy"
        titleStyle={styles.headerTitleStyle}
        subtitle="Tekan disini untuk melihat profil"
        subtitleStyle={styles.subtitleStyle}
        color="white"
        onPress={() => navigation.navigate('ProfileMom')}
      />

      <Menu
        visible={menuVisible}
        onDismiss={toggleMenu}
        anchor={
          <Appbar.Action
            icon="dots-vertical"
            style={styles.menuIcon}
            onPress={toggleMenu}
            color="white"
          />
        }
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate('Invite');
            toggleMenu();
          }}
          title="Tambahkan konselor"
        />
        <Divider />
        <Menu.Item onPress={() => {}} title="Akhiri" />
      </Menu>
    </Appbar>
  );
};

ChatAppBar.propTypes = propTypes;
ChatAppBar.defaultProps = defaultProps;

export default ChatAppBar;
