import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar, Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { Avatar } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ChatAppBar = (props) => {
  const { navigation, user } = props;

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
        <Avatar
          name={user.profile.name}
          photo={user.photo ? user.photo : null}
          size={36}
        />
      </TouchableOpacity>
      <Appbar.Content
        title={user.profile.name}
        titleStyle={styles.headerTitleStyle}
        subtitle="Tekan disini untuk melihat profil"
        subtitleStyle={styles.subtitleStyle}
        color="white"
        onPress={() => navigation.navigate('ProfileMom', { user })}
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
