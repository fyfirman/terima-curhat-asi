import React, { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CoreServices } from '../../Services';
import { Moms, Baby, Husband, Pregnancy } from './Screens';
import { LoadingContent } from '../../Components';
import { TopSection } from './Components';
import { Colors } from '../../Theme';
import * as styles from './styles';

const Tab = createMaterialTopTabNavigator();

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ProfileMom = (props) => {
  const { route } = props;
  const { user } = route.params;

  const { profile } = user;

  return (
    <>
      <TopSection
        name={user.profile?.name}
        phoneNumber={user.username}
        photo={user.profile?.picture?.original}
      />

      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.persianPink,
          labelStyle: styles.tabLabelStyle,
          inactiveTintColor: Colors.textSecondary,
          indicatorStyle: styles.tabIndicatorStyle,
          scrollEnabled: true,
          tabStyle: styles.tabStyle,
          style: styles.tabContainer
        }}
      >
        <Tab.Screen
          name="Moms"
          component={Moms}
          options={{ tabBarLabel: 'Ibu' }}
          initialParams={{ user }}
        />
        <Tab.Screen
          name="Pregnancy"
          component={Pregnancy}
          options={{ tabBarLabel: 'Kehamilan' }}
          initialParams={{ pregnancy: profile.pregnancy }}
        />
        <Tab.Screen
          name="Baby"
          component={Baby}
          options={{ tabBarLabel: 'Bayi' }}
          initialParams={{ baby: profile.baby }}
        />
        <Tab.Screen
          name="Husband"
          component={Husband}
          options={{ tabBarLabel: 'Anggota Keluarga Lain' }}
          initialParams={{ husband: profile.husband }}
        />
      </Tab.Navigator>
    </>
  );
};

ProfileMom.propTypes = propTypes;
ProfileMom.defaultProps = defaultProps;

export default ProfileMom;
