import React, { useState } from 'react';
import { ToastAndroid, TouchableOpacity } from 'react-native';
import { Appbar, Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

import { CoreServices } from '../../../../Services';
import { Avatar } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  selfUser: PropTypes.objectOf(PropTypes.any).isRequired,
  consultation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ChatAppBar = (props) => {
  const { navigation, user, consultation, selfUser } = props;

  const [menuVisible, setMenuVisible] = useState(false);

  const inviteMatchup = {
    kdr: 'Bidan',
    bdn: 'Konselor',
    cons: 'Dokter Umum',
    du: 'Dokter Spesialis'
  };

  const toggleMenu = () => {
    setMenuVisible((value) => !value);
  };

  const handleEndChat = () => {
    CoreServices.putCloseConsulation(consultation.id)
      .then(
        (res) => {
          navigation.goBack();
          ToastAndroid.show(res.message, ToastAndroid.SHORT);
        },
        (error) => {
          ToastAndroid.show(error.message, ToastAndroid.LONG);
        }
      )
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
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
          name={user.profile?.name}
          photo={user.profile?.picture?.original}
          size={36}
        />
      </TouchableOpacity>
      <Appbar.Content
        title={user.profile?.name || 'User'}
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
        {selfUser.user_group.id !== 'dsp' && (
          <>
            <Menu.Item
              onPress={() => {
                navigation.navigate('Invite', { consultation });
                toggleMenu();
              }}
              title={`Tambahkan ${inviteMatchup[selfUser.user_group.id]}`}
            />
            <Divider />
          </>
        )}
        <Menu.Item onPress={handleEndChat} title="Akhiri" />
      </Menu>
    </Appbar>
  );
};

ChatAppBar.propTypes = propTypes;
ChatAppBar.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  selfUser: state.user
});

export default connect(mapStateToProps)(ChatAppBar);
