import React from 'react';
import PropTypes from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Moms, Baby, Husband, Pregnancy } from './Screens';
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

  return (
    <>
      <TopSection
        name={user.profile.name}
        phoneNumber={user.username}
        photo={user.profile.picture}
      />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.java,
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
          initialParams={{ pregnancy: user.profile.pregnancy }}
        />
        <Tab.Screen
          name="Baby"
          component={Baby}
          options={{ tabBarLabel: 'Bayi' }}
          initialParams={{ baby: user.profile.baby }}
        />
        <Tab.Screen
          name="Husband"
          component={Husband}
          options={{ tabBarLabel: 'Anggota Keluarga Lain' }}
          initialParams={{ husband: user.profile.husband }}
        />
      </Tab.Navigator>
    </>
  );
};

ProfileMom.propTypes = propTypes;
ProfileMom.defaultProps = defaultProps;

export default ProfileMom;
