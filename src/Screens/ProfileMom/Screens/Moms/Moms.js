import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {};

const defaultProps = {};

const Moms = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Moms</Text>
    </View>
  );
};

Moms.propTypes = propTypes;
Moms.defaultProps = defaultProps;

export default Moms;
