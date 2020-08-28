import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { DateFormatter } from '../../../../../Helper';
import * as styles from './styles';

const propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.instanceOf(Date)
};

const defaultProps = {
  name: 'User tidak mempunyai nama',
  message: '',
  time: new Date(2020, 7, 28, 11, 20)
};

const ChatItem = (props) => {
  const { name, message, time } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image
        style={styles.ava}
        source={require('../../../../../assets/images/logo.png')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{DateFormatter.getRelativeTime(time)}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ChatItem.propTypes = propTypes;
ChatItem.defaultProps = defaultProps;

export default ChatItem;
