import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import * as styles from './styles';

const propTypes = {
  message: PropTypes.string,
  senderName: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  self: PropTypes.bool
};

const defaultProps = {
  message: '',
  senderName: '',
  time: new Date(),
  self: false
};

const ChatBubble = (props) => {
  const { message, senderName, time, self } = props;

  return (
    <View style={!self ? styles.root : styles.rootSelf}>
      {!self && <Text style={styles.name}>{senderName}</Text>}
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.time}>
        {`${time.getHours()}:${time.getMinutes()}`}
      </Text>
    </View>
  );
};

ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;

export default ChatBubble;
