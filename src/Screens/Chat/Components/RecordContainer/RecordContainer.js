/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import { PermissionHelper } from '../../../../Helper';
import * as styles from './styles';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

class RecordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      recordData: {
        recordSecs: 0,
        recordTime: '00:00:00'
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
    const { user } = this.props;

    this.setState((prevState) => ({ ...prevState, isRecording: true }));

    const path = `${RNFS.DocumentDirectoryPath}/voice-notes-${
      user.id
    }-${new Date().toISOString()}`;
    await this.audioRecorderPlayer.startRecorder(path);

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
    const { isRecording, recordData } = this.state;
    return (
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
    );
  }
}

RecordContainer.propTypes = propTypes;
RecordContainer.defaultProps = defaultProps;

export default RecordContainer;
