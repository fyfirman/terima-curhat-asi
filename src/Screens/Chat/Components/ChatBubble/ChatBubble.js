import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Avatar } from '../../../../Components';
import TimeSection from './TimeSection';
import * as styles from './styles';

const propTypes = {
  message: PropTypes.string,
  senderName: PropTypes.string,
  dateSent: PropTypes.instanceOf(Date),
  self: PropTypes.bool,
  avatar: PropTypes.string,
  imageResource: PropTypes.string
};

const defaultProps = {
  message: '',
  senderName: 'User',
  dateSent: new Date(),
  self: false,
  avatar: null,
  imageResource: null
};

const ChatBubble = (props) => {
  const { message, senderName, dateSent, self, avatar, imageResource } = props;
  const [imageViewer, setImageViewer] = useState(false);

  return (
    <>
      <Modal
        visible={imageViewer}
        onRequestClose={() => setImageViewer(false)}
        transparent
      >
        <ImageViewer
          imageUrls={[{ url: imageResource }]}
          loadingRender={() => <Text>Mohon tunggu</Text>}
        />
      </Modal>
      <View style={styles.root(self)}>
        {!self && (
          <Avatar
            style={styles.ava}
            size={40}
            name={senderName || 'User'}
            photo={avatar}
          />
        )}
        <View style={styles.container(self)}>
          {!self && <Text style={styles.name}>{senderName || 'User'}</Text>}
          {imageResource ?? (
            <TouchableOpacity onPress={() => setImageViewer(true)}>
              <Image
                style={styles.imageStyle}
                source={{ uri: imageResource }}
              />
            </TouchableOpacity>
          )}
          {!imageResource && <Text style={styles.message}>{message}</Text>}
          <TimeSection date={dateSent} />
        </View>
      </View>
    </>
  );
};

ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;

export default ChatBubble;
