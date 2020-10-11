/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ToastAndroid } from 'react-native';
import { Button } from 'react-native-paper';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import { PermissionHelper } from '../../../../Helper';
import * as styles from './styles';
import { CoreServices } from '../../../../Services';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  consultation: PropTypes.objectOf(PropTypes.any).isRequired
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
      },
      voiceNote: null
    };
    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.audioRecorderPlayer.setSubscriptionDuration(0.09);

    this.onStartRecord = this.onStartRecord.bind(this);
    this.onStopRecord = this.onStopRecord.bind(this);
    this.storeVoiceNotes = this.storeVoiceNotes.bind(this);
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

    const type = 'audio/m4a';
    const filename = `voice-notes-${user.id}-${new Date()
      .toISOString()
      .replace(/-/g, '')
      .replace(/:/g, '')
      .replace('.', '')}`;
    const path = `${RNFS.DocumentDirectoryPath}/${filename}.m4a`;

    const uri = await this.audioRecorderPlayer.startRecorder(path);

    const voiceNote = {
      type,
      name: `${filename}.${type}`,
      uri
    };

    this.setState((prevState) => ({
      ...prevState,
      isRecording: true,
      voiceNote
    }));

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
    await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();

    this.setState((prevState) => ({
      ...prevState,
      isRecording: false,
      recordData: {
        ...prevState.recordData,
        recordSecs: 0,
        recordTime: this.audioRecorderPlayer.mmssss(Math.floor(0))
      }
    }));

    this.storeVoiceNotes();
  }

  storeVoiceNotes() {
    const { consultation } = this.props;
    const { voiceNote } = this.state;

    const body = {
      message: '#voiceNote',
      voice_note: voiceNote
    };

    CoreServices.postStoreConsultationPost(consultation.id, body).then(
      (res) => {
        ToastAndroid.show(res.message, ToastAndroid.LONG);
      },
      (error) => {
        if (error.response) {
          ToastAndroid.show(error.response.data, ToastAndroid.LONG);
        } else {
          ToastAndroid.show(error.message, ToastAndroid.LONG);
        }
      }
    );
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
