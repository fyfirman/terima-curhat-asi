import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { Avatar } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  message: PropTypes.string,
  senderName: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  self: PropTypes.bool,
  avatar: PropTypes.string,
  imageResource: PropTypes.string
};

const defaultProps = {
  message: '',
  senderName: '',
  time: new Date(),
  self: false,
  avatar: null,
  imageResource: null
};

const ChatBubble = (props) => {
  const { message, senderName, time, self, avatar, imageResource } = props;

  return (
    <View style={styles.root(self)}>
      {!self && (
        <Avatar style={styles.ava} size={40} name={senderName} photo={avatar} />
      )}
      <View style={styles.container(self)}>
        {!!imageResource && (
          <Image
            style={styles.imageStyle}
            resizeMethod="resize"
            source={imageResource}
          />
        )}
        {!self && <Text style={styles.name}>{senderName}</Text>}
        {message !== '' && <Text style={styles.message}>{message}</Text>}
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
