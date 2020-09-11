import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { SessionAction, UserAction } from '../../../Redux/Actions';
import { Colors } from '../../../Theme';
import { PromptDialog } from '../../../Components';
import { getInitial } from '../../../Helper';
import * as styles from './styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  flushUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const CustomDrawer = (props) => {
  const { flushUser, user, navigation } = props;

  const [promptVisibility, setPromptVisibility] = useState(false);

  const logout = () => {
    setPromptVisibility(false);
    flushUser();
    navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.root}>
      <TouchableOpacity style={styles.userInfoSection} onPress={() => {}}>
        {user.profile.picture === null ? (
          <Avatar.Text
            label={getInitial(user.profile.name)}
            size={64}
            labelStyle={styles.avatarTextLabel}
            style={styles.avatarText}
          />
        ) : (
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg'
              // TODO: fix uri avatar with data from api
            }}
            size={64}
          />
        )}
        <View style={styles.infoSection}>
          <Text style={styles.name}>{user.profile.name}</Text>
          <Text style={styles.profession}>{user.user_group.name}</Text>
        </View>
      </TouchableOpacity>
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
