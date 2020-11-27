import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { Colors } from '../../Theme';

const propTypes = {
  message: PropTypes.string,
  containerStyles: PropTypes.objectOf(PropTypes.any)
};

const defaultProps = {
  message: '',
  containerStyles: {}
};

const LoadingContent = (props) => {
  const { message, containerStyles } = props;

  return (
    <View style={{ ...styles.root, ...containerStyles }}>
      <ActivityIndicator animating color={Colors.cerulean} size="large" />
      <Text style={styles.message} color={Colors.cerulean}>
        {message}
      </Text>
    </View>
  );
};

LoadingContent.propTypes = propTypes;
LoadingContent.defaultProps = defaultProps;

export default LoadingContent;
