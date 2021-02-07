import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

const defaultProps = {};

const ProfileInfoItem = (props) => {
  const { label, info } = props;

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.info}>{info !== null ? info : '-'}</Text>
    </View>
  );
};

ProfileInfoItem.propTypes = propTypes;
ProfileInfoItem.defaultProps = defaultProps;

export default ProfileInfoItem;
