import React from 'react';
import PropTypes from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Moms, Baby, Husband, Pregnancy } from './Screens';
import TopSection from './TopSection';

const Tab = createMaterialTopTabNavigator();

const propTypes = {};

const defaultProps = {};

const ProfileMom = () => {
  return (
    <>
      <TopSection name="Mira Suryani" phoneNumber="+628337318282" />
      <Tab.Navigator>
        <Tab.Screen name="Moms" component={Moms} />
        <Tab.Screen name="Pregnancy" component={Pregnancy} />
        <Tab.Screen name="Baby" component={Baby} />
        <Tab.Screen name="Husband" component={Husband} />
      </Tab.Navigator>
    </>
  );
};

ProfileMom.propTypes = propTypes;
ProfileMom.defaultProps = defaultProps;

export default ProfileMom;
