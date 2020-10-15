import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import * as styles from './styles';

const propTypes = {
  info: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any)
};

const defaultProps = {
  style: {}
};

const EmptyInfo = (props) => {
  const { info, style } = props;

  return (
    <View style={{ ...styles.infoContainer, ...style }}>
      <Text style={styles.emptyInfo}>{info}</Text>
    </View>
  );
};

EmptyInfo.propTypes = propTypes;
EmptyInfo.defaultProps = defaultProps;

export default EmptyInfo;
