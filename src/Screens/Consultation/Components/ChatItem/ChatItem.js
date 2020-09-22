import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import { DateFormatter, getInitial } from '../../../../Helper';
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

  const renderAvatar = () => {
    if (photo === null) {
      return (
        <Avatar.Text
          style={styles.ava}
          labelStyle={styles.labelStyle}
          label={getInitial(name)}
          size={55}
        />
      );
    }
    return (
      <Avatar.Image style={styles.ava} source={{ uri: photo }} size={55} />
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {renderAvatar()}
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
