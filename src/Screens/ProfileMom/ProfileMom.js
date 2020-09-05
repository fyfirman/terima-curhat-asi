import React from 'react';
import PropTypes from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Moms, Baby, Husband, Pregnancy } from './Screens';
import { TopSection } from './Components';
import { Colors } from '../../Theme';
import * as styles from './styles';

const Tab = createMaterialTopTabNavigator();

const propTypes = {};

const defaultProps = {};

const ProfileMom = () => {
  return (
    <>
      <TopSection name="Mira Suryani" phoneNumber="+628337318282" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.java,
          labelStyle: styles.tabLabelStyle,
          inactiveTintColor: Colors.textSecondary,
          indicatorStyle: styles.tabIndicatorStyle,
          scrollEnabled: true,
          tabStyle: styles.tabStyle
        }}
      >
        <Tab.Screen
          name="Moms"
          component={Moms}
          options={{ tabBarLabel: 'Ibu' }}
        />
        <Tab.Screen
          name="Pregnancy"
          component={Pregnancy}
          options={{ tabBarLabel: 'Kehamilan' }}
        />
        <Tab.Screen
          name="Baby"
          component={Baby}
          options={{ tabBarLabel: 'Bayi' }}
        />
        <Tab.Screen
          name="Husband"
          component={Husband}
          options={{ tabBarLabel: 'Suami' }}
        />
      </Tab.Navigator>
    </>
  );
};

ProfileMom.propTypes = propTypes;
ProfileMom.defaultProps = defaultProps;

export default ProfileMom;
