import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  name: PropTypes.string,
  status: PropTypes.bool.isRequired,
  onPress: PropTypes.func
};

const defaultProps = {
  name: 'User tidak mempunyai nama',
  onPress: () => {}
};

const ChatItem = (props) => {
  const { name, status, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.ava}
        source={require('../../../../assets/images/logo.png')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status ? 'Online' : 'Offline'}</Text>
      </View>
    </TouchableOpacity>
  );
};

ChatItem.propTypes = propTypes;
ChatItem.defaultProps = defaultProps;

export default ChatItem;
