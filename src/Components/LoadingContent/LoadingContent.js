import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { Colors } from '../../Theme';

const propTypes = {
  message: PropTypes.string
};

const defaultProps = {
  message: ''
};

const LoadingContent = (props) => {
  const { message } = props;

  return (
    <View style={styles.root}>
      <ActivityIndicator animating color={Colors.java} size="large" />
      <Text style={styles.message} color={Colors.java}>
        {message}
      </Text>
    </View>
  );
};

LoadingContent.propTypes = propTypes;
LoadingContent.defaultProps = defaultProps;

export default LoadingContent;
