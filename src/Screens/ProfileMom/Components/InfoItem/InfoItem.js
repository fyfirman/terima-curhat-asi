import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

const defaultProps = {};

const InfoItem = (props) => {
  const { label, info } = props;

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

InfoItem.propTypes = propTypes;
InfoItem.defaultProps = defaultProps;

export default InfoItem;
