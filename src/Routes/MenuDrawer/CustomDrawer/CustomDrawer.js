import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SessionAction, UserAction } from '../../../Redux/Actions';

import { Colors } from '../../../Theme';
import { Avatar, PromptDialog } from '../../../Components';
import { CoreServices, PusherBeamsServices } from '../../../Services';
import * as styles from './styles';
import BeamsInterest from '../../../Constant/BeamsInterest';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  setUser: PropTypes.func.isRequired,
  flushUser: PropTypes.func.isRequired,
  flushSession: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const CustomDrawer = (props) => {
  const { flushUser, flushSession, user, setUser, navigation } = props;

  const [promptVisibility, setPromptVisibility] = useState(false);

  const [profileIsLoaded, setProfileIsLoaded] = useState(false);

  useEffect(() => {
    CoreServices.getProfile()
      .then(
        (res) => {
          setUser(res.payload);
          setProfileIsLoaded(true);

          PusherBeamsServices.subscribe(BeamsInterest.USER + res.payload.id);
          PusherBeamsServices.subscribeAllChat();
        },
        (error) => {
          if (error.response === null) {
            throw error;
          }
        }
      )
      .catch((error) => {
        ToastAndroid.show('Tidak terkoneksi dengan server', ToastAndroid.SHORT);
        console.error(error);
      });
  }, []);

  const logout = () => {
    PusherBeamsServices.unsubscribeAll();
    setPromptVisibility(false);
    setProfileIsLoaded(false);
    flushSession();
    flushUser();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
    );
  };

  const renderAvatar = () => {
    if (profileIsLoaded) {
      return (
        <Avatar
          name={user.profile?.name}
          style={styles.avatarText}
          photo={user.profile?.picture?.original}
          size={64}
        />
      );
    }
    return <Avatar name="" size={64} style={styles.avatarText} />;
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.root}>
      <TouchableOpacity
        style={styles.userInfoSection}
        onPress={() => navigation.navigate('ProfileSelf')}
      >
        {renderAvatar()}
        <View style={styles.infoSection}>
          <Text style={styles.name}>
            {profileIsLoaded ? user.profile?.name : ''}
          </Text>
          <Text style={styles.profession}>
            {profileIsLoaded ? user.user_group.name : ''}
          </Text>
          <Text style={styles.profession}>
            Tekan disini untuk mengubah foto profil
          </Text>
        </View>
      </TouchableOpacity>
      <DrawerItemList
        {...props}
        style={styles.menuItems}
        labelStyle={styles.labelStyle}
        activeTintColor={Colors.cerulean}
        inactiveTintColor={Colors.textPrimary}
      />
      <View style={styles.footer}>
        <DrawerItem
          label="Keluar"
          onPress={() => setPromptVisibility(true)}
          style={styles.signOutItem}
          labelStyle={styles.labelStyle}
          inactiveTintColor={Colors.redAlert}
          icon={({ color, size }) => (
            <Icon color={color} size={size} name="log-out-outline" />
          )}
        />
      </View>
      <PromptDialog
        visible={promptVisibility}
        onDismiss={() => setPromptVisibility(false)}
        onNoHandler={() => setPromptVisibility(false)}
        onYesHandler={logout}
        title="Apakah anda yakin akan logout?"
        content="Dengan menekan tombol yakin, akun anda akan tidak tertaut dengan
        aplikasi. Anda bisa masuk kembali dengan akun yang anda miliki?"
        yesLabel="Yakin"
        noLabel="Kembali"
      />
    </DrawerContentScrollView>
  );
};

CustomDrawer.propTypes = propTypes;
CustomDrawer.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...SessionAction, ...UserAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
