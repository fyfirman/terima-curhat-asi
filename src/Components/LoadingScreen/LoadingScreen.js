import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  message: PropTypes.string
};

const defaultProps = {
  message: ''
};

const LoadingScreen = (props) => {
  const { message } = props;

  return (
    <View style={styles.root}>
      <ActivityIndicator animating color="white" size="large" />
      <Text style={styles.message} color="white">
        {message}
      </Text>
    </View>
  );
};

LoadingScreen.propTypes = propTypes;
LoadingScreen.defaultProps = defaultProps;

export default LoadingScreen;
