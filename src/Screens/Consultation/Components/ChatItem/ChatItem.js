import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { DateFormatter, getInitial } from '../../../../Helper';
import { Avatar } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  photo: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  onPress: PropTypes.func
};

const defaultProps = {
  name: 'User tidak mempunyai nama',
  message: '',
  photo: null,
  time: new Date(2020, 7, 28, 11, 20),
  onPress: () => {}
};

const ChatItem = (props) => {
  const { name, message, time, photo, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar name={name} photo={photo} size={55} />
      <View style={styles.infoContainer}>
        <View style={styles.topSection}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{DateFormatter.getRelativeTime(time)}</Text>
        </View>
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
