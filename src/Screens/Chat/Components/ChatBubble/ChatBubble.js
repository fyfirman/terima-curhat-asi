import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Avatar, HighlightUrlText } from '../../../../Components';
import { TimeSection } from './TimeSection';
import * as styles from './styles';

const propTypes = {
  message: PropTypes.string,
  senderName: PropTypes.string,
  dateSent: PropTypes.instanceOf(Date),
  self: PropTypes.bool,
  photoUri: PropTypes.string,
  imageResource: PropTypes.string
};

const defaultProps = {
  message: '',
  senderName: 'User',
  dateSent: new Date(),
  self: false,
  photoUri: null,
  imageResource: null
};

const ChatBubble = (props) => {
  const {
    message,
    senderName,
    dateSent,
    self,
    photoUri,
    imageResource
  } = props;
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
            name={senderName ?? 'User'}
            photo={photoUri}
            size={40}
            style={styles.ava}
          />
        )}
        <View style={styles.container(self)}>
          {!self && <Text style={styles.name}>{senderName || 'User'}</Text>}
          {!imageResource ?? (
            <TouchableOpacity onPress={() => setImageViewer(true)}>
              <Image
                style={styles.imageStyle}
                source={{ uri: imageResource }}
              />
            </TouchableOpacity>
          )}
          {!imageResource && (
            <HighlightUrlText style={styles.message}>
              {message}
            </HighlightUrlText>
          )}
          <TimeSection date={dateSent} />
        </View>
      </View>
    </>
  );
};

ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;

export default ChatBubble;
