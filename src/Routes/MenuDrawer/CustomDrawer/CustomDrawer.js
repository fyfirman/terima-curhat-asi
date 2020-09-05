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
import { Avatar, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { SessionAction, UserAction } from '../../../Redux/Actions';
import * as styles from './styles';
import { Colors } from '../../../Theme';

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
    flushUser();
    navigation.navigate('Login');
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
          onPress={() => setPromptVisibility(true)}
          style={styles.signOutItem}
          labelStyle={styles.labelStyle}
          inactiveTintColor={Colors.redAlert}
          icon={({ color, size }) => (
            <Icon color={color} size={size} name="log-out-outline" />
          )}
        />
      </View>
      <Portal>
        <Dialog
          visible={promptVisibility}
          onDismiss={() => setPromptVisibility(false)}
        >
          <Dialog.Title>Apakah kamu yakin akan keluar?</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Dengan menekan tombol yakin, akun anda akan tidak tertaut dengan
              aplikasi. Anda bisa masuk kembali dengan akun yang anda miliki
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => setPromptVisibility(false)}
              color={Colors.cranberry}
            >
              Kembali
            </Button>
            <Button onPress={logout} color={Colors.cranberry}>
              Yakin
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
