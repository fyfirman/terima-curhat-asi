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
  lastPost: PropTypes.objectOf(PropTypes.any)
};

const defaultProps = {
  name: 'User tidak mempunyai nama',
  photo: null,
  onPress: () => {},
  lastPost: null
};

const ChatItem = (props) => {
  const { name, photo, onPress, lastPost } = props;

  const renderTime = () => {
    if (lastPost !== null) {
      const date = DateFormatter.convertStringToDate(lastPost.created_at);
      return DateFormatter.getRelativeTime(date);
    }
    return '';
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar name={name} photo={photo} size={55} />
      <View style={styles.infoContainer}>
        <View style={styles.topSection}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{renderTime()}</Text>
        </View>
        <Text style={styles.message} numberOfLines={1}>
          {lastPost ? lastPost.message : 'Tidak ada pesan'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ChatItem.propTypes = propTypes;
ChatItem.defaultProps = defaultProps;

export default ChatItem;
