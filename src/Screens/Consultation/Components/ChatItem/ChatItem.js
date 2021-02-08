import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { DateFormatter } from '../../../../Helper';
import { Avatar } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  onPress: PropTypes.func,
  lastPost: PropTypes.objectOf(PropTypes.any),
  description: PropTypes.string,
  createdAt: PropTypes.string.isRequired
};

const defaultProps = {
  name: 'User',
  photo: null,
  onPress: () => {},
  lastPost: null,
  description: ''
};

const ChatItem = (props) => {
  const { name, photo, onPress, lastPost, description, createdAt } = props;

  const renderTime = () => {
    if (lastPost !== null) {
      const date = DateFormatter.convertStringToDate(createdAt);
      return DateFormatter.getRelativeTime(date);
    }
    return '';
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar name={name ?? 'User'} photo={photo} size={55} />
      <View style={styles.infoContainer}>
        <View style={styles.topSection}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{`Tanggal dibuat : ${renderTime()}`}</Text>
        </View>
        <Text style={styles.message} numberOfLines={1}>
          {`Keluhan : ${description}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ChatItem.propTypes = propTypes;
ChatItem.defaultProps = defaultProps;

export default ChatItem;
