import React from 'react';
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
import * as styles from './styles';
import { Colors } from '../../../Theme';

const propTypes = {
  flushUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const CustomDrawer = (props) => {
  const { flushUser, user } = props;

  const logout = () => {
    console.log('User : ', user);
    flushUser();
    console.log('User after flush: ', user);
    // console.log('Logged out...');
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.root}>
      <TouchableOpacity style={styles.userInfoSection} onPress={() => {}}>
        <Avatar.Image
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg'
          }}
          size={64}
        />
        <View style={styles.infoSection}>
          <Text style={styles.name}>Indah Pramestiwi</Text>
          <Text style={styles.profession}>Kader</Text>
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
          onPress={logout}
          style={styles.signOutItem}
          labelStyle={styles.labelStyle}
          inactiveTintColor={Colors.redAlert}
          icon={({ color, size }) => (
            <Icon color={color} size={size} name="log-out-outline" />
          )}
        />
      </View>
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
