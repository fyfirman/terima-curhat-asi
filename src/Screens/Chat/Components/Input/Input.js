/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { PermissionHelper } from '../../../../Helper';
import * as styles from './styles';

const propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePicker: PropTypes.func.isRequired
};

const defaultProps = {};

class InputChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attachmentShown: false,
      isRecording: false,
      recordData: {
        isLoggingIn: false,
        recordSecs: 0,
        recordTime: '00:00:00',
        currentPositionSec: 0,
        currentDurationSec: 0,
        playTime: '00:00:00',
        duration: '00:00:00'
      }
    };
    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.audioRecorderPlayer.setSubscriptionDuration(0.09);

    this.onStartRecord = this.onStartRecord.bind(this);
    this.onStopRecord = this.onStopRecord.bind(this);
  }

  componentDidMount() {
    this.checkPermission();
  }

  async checkPermission() {
    const granted = await PermissionHelper.checkRecorder();

    if (!granted) {
      PermissionHelper.requestRecorder();
    }
  }

  async onStartRecord() {
    this.setState((prevState) => ({ ...prevState, isRecording: true }));

    // TODO : Change with dynamic URL from API
    const path = 'sdcard/hello.m4a';
    const uri = await this.audioRecorderPlayer.startRecorder(path);

    this.audioRecorderPlayer.addRecordBackListener((e) => {
      this.setState((prevState) => ({
        ...prevState,
        recordData: {
          ...prevState.recordData,
          recordSecs: e.current_position,
          recordTime: this.audioRecorderPlayer.mmssss(
            Math.floor(e.current_position)
          )
        }
      }));
    });
  }

  async onStopRecord() {
    this.setState((prevState) => ({ ...prevState, isRecording: false }));
    await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState((prevState) => ({
      ...prevState,
      recordData: {
        ...prevState.recordData,
        recordSecs: 0,
        recordTime: this.audioRecorderPlayer.mmssss(Math.floor(0))
      }
    }));
  }

  render() {
    const { input, setInput, handleSubmit, handlePicker } = this.props;
    const { attachmentShown, isRecording, recordData } = this.state;
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
                    this.setState((prevState) => ({
                      ...prevState,
                      attachmentShown: !attachmentShown
                    }));
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
              onPress={!isRecording ? this.onStartRecord : this.onStopRecord}
              style={styles.buttonRecord}
              labelStyle={styles.buttonRecordIcon}
            />
          </View>
        )}
      </View>
    );
  }
}

InputChat.propTypes = propTypes;
InputChat.defaultProps = defaultProps;

export default InputChat;
