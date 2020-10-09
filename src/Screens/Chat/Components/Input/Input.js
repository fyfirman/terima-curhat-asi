import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-paper';
import RNFS from 'react-native-fs';
import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioSourceAndroidType
} from 'react-native-audio-recorder-player';
import { PermissionHelper } from '../../../../Helper';
import * as styles from './styles';

const propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePicker: PropTypes.func.isRequired
};

const defaultProps = {};

const InputChat = (props) => {
  const { input, setInput, handleSubmit, handlePicker } = props;

  const audioRecorderPlayer = new AudioRecorderPlayer();
  const [attachmentShown, setAttachmentShown] = useState(false);
  const [recordData, setRecordData] = useState({
    recordSecs: 0,
    recordTime: 0
  });
  const [recordResult, setRecordResult] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const granted = await PermissionHelper.checkRecorder();

      if (!granted) {
        PermissionHelper.requestRecorder();
      }
    };

    checkPermission();
  }, []);

  const onStartRecord = async () => {
    setIsRecording(true);

    RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/recorder`);
    const path = `${RNFS.DocumentDirectoryPath}/recorder/recording.aac`;

    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac
    };
    const meteringEnabled = false;
    const result = await audioRecorderPlayer.startRecorder(
      path,
      meteringEnabled,
      audioSet
    );

    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordData({
        recordSecs: e.current_position,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position))
      });
    });

    setRecordResult(result);
    console.log('Recording started', result);
  };

  const onStopRecord = async () => {
    setIsRecording(false);
    setRecordData({});

    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();

    console.log('Recording stopped, result');
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Masukkan Pesan"
          onChangeText={setInput}
          value={input}
        />
        <Button
          onPress={handlePicker}
          style={styles.attachmentButton}
          labelStyle={styles.attachmentButtonIcon}
          contentStyle={styles.contentStyle}
          icon="message-image-outline"
          mode="contained"
          size={20}
          compact
        />
        <Button
          onPress={
            input !== ''
              ? handleSubmit
              : () => {
                  setAttachmentShown(!attachmentShown);
                }
          }
          style={styles.sendButton}
          labelStyle={styles.buttonIcon}
          contentStyle={styles.contentStyle}
          icon={input !== '' ? 'send' : 'microphone'}
          mode="contained"
          size={20}
          compact
        />
      </View>

      {attachmentShown && (
        <View style={styles.attachmentContainer}>
          <Text style={styles.recordingHelper}>
            {isRecording
              ? recordData.recordTime
              : 'Tekan tombol untuk memulai merekam suara'}
          </Text>
          <Button
            icon={!isRecording ? 'microphone' : 'stop'}
            onPress={!isRecording ? onStartRecord : onStopRecord}
            style={styles.buttonRecord}
            labelStyle={styles.buttonRecordIcon}
          />
        </View>
      )}
    </View>
  );
};

InputChat.propTypes = propTypes;
InputChat.defaultProps = defaultProps;

export default InputChat;
