import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { Button } from 'react-native-paper';
import { Avatar } from '../../../../Components';
import { Colors } from '../../../../Theme';
import * as styles from './styles';

const propTypes = {
  senderName: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  self: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  voiceNote: PropTypes.string.isRequired
};

const defaultProps = {
  senderName: '',
  time: new Date(),
  avatar: null
};

const ChatBubble = (props) => {
  const { senderName, time, self, avatar, voiceNote } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRecorderPlayer = new AudioRecorderPlayer();

  const onStartPlay = async () => {
    setIsPlaying(true);
    await audioRecorderPlayer.startPlayer(voiceNote);

    audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.current_position === e.duration) {
        setIsPlaying(false);
        audioRecorderPlayer.stopPlayer();
      }
    });
  };

  const onStopPlay = async () => {
    setIsPlaying(false);
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  return (
    <View style={styles.root(self)}>
      {!self && (
        <Avatar style={styles.ava} size={40} name={senderName} photo={avatar} />
      )}
      <View style={styles.container(self)}>
        {!self && <Text style={styles.name}>{senderName}</Text>}
        <Button
          labelStyle={styles.button}
          color={Colors.textPrimary}
          icon={isPlaying ? 'stop' : 'play'}
          onPress={isPlaying ? onStopPlay : onStartPlay}
        />
        <Text style={styles.label}>Pesan Suara.</Text>
        <Text style={styles.label}>Tekan tombol untuk mendengarkan</Text>
        <Text style={styles.time}>
          {`${time.getHours() < 9 ? `0${time.getHours()}` : time.getHours()}:${
            time.getMinutes() < 9 ? `0${time.getMinutes()}` : time.getMinutes()
          }`}
        </Text>
      </View>
    </View>
  );
};

ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;

export default ChatBubble;
