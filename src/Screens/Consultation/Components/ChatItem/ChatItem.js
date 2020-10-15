import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { DateFormatter } from '../../../../Helper';
import { CoreServices } from '../../../../Services';
import { Avatar } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  onPress: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const defaultProps = {
  name: 'User tidak mempunyai nama',
  photo: null,
  onPress: () => {}
};

const ChatItem = (props) => {
  const { name, photo, onPress, posts } = props;

  const getLastPost = () => posts[0];

  const renderTime = () => {
    if (getLastPost() !== undefined) {
      const date = DateFormatter.convertStringToDate(getLastPost().created_at);
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
          {getLastPost() ? getLastPost().message : 'Belum ada pesan'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ChatItem.propTypes = propTypes;
ChatItem.defaultProps = defaultProps;

export default ChatItem;
