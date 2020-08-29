import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';
import * as styles from './styles';

const propTypes = {
  message: PropTypes.string,
  senderName: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  self: PropTypes.bool,
  ava: PropTypes.string
};

const defaultProps = {
  message: '',
  senderName: '',
  time: new Date(),
  self: false,
  ava: ''
};

const ChatBubble = (props) => {
  const { message, senderName, time, self, ava } = props;

  return (
    <View style={styles.root(self)}>
      {!self && (
        <Image
          style={styles.ava}
          source={require('../../../../assets/images/logo.png')}
        />
      )}
      <View style={styles.container(self)}>
        {!self && <Text style={styles.name}>{senderName}</Text>}
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>
          {`${time.getHours()}:${time.getMinutes()}`}
        </Text>
      </View>
    </View>
  );
};

ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;

export default ChatBubble;
