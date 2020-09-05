import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Moms,
  Baby,
  Husband,
  Pregnancy
} from '../../Screens/ProfileMom/Screens';
import { TopSection } from '../../Screens/ProfileMom';

const Tab = createMaterialTopTabNavigator();

const propTypes = {};

const defaultProps = {};

const TopTabNavigator = () => {
  return (
    <>
      <TopSection />
      <Tab.Navigator>
        <Tab.Screen name="Moms" component={Moms} />
        <Tab.Screen name="Pregnancy" component={Pregnancy} />
        <Tab.Screen name="Baby" component={Baby} />
        <Tab.Screen name="Husband" component={Husband} />
      </Tab.Navigator>
    </>
  );
};

TopTabNavigator.propTypes = propTypes;
TopTabNavigator.defaultProps = defaultProps;

export default TopTabNavigator;
