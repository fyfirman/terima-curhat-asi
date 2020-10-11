/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  ToastAndroid,
  PermissionsAndroid
} from 'react-native';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import * as styles from './styles';
import RecordContainer from '../RecordContainer';
import { CoreServices } from '../../../../Services';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  consultation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      attachmentShown: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePicker = this.handlePicker.bind(this);
  }

  // TODO: Refactor this
  async requestPickerPermission() {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permintaan Izin',
          message: 'Terima Curhat ASI meminta akses kamera'
        }
      );
      const externalStoragePermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permintaan Izin',
          message: 'Terima Curhat ASI meminta akses penyimpanan eksternal'
        }
      );
      if (
        cameraPermission !== PermissionsAndroid.RESULTS.GRANTED &&
        externalStoragePermission !== PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async handlePicker() {
    const cameraPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    const externalStoragePermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );

    if (!cameraPermission && !externalStoragePermission) {
      this.requestPickerPermission();
    }

    const options = {
      title: 'Pilih foto',
      takePhotoButtonTitle: 'Buka kamera',
      chooseFromLibraryButtonTitle: 'Pilih dari galeri',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.error) {
        ToastAndroid.show(response.error, ToastAndroid.LONG);
      } else if (response.didCancel) {
      } else {
        this.handleSubmitWithImage(response);
      }
    });
  }

  handleSubmit() {
    const { consultation } = this.props;
    const { input } = this.state;

    this.setState({ input: '' });

    CoreServices.postStoreConsultationPost(consultation.id, {
      message: input
    }).then(
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

  handleSubmitWithImage(imageData) {
    const { consultation } = this.props;

    const body = {
      message: '#images',
      picture: {
        uri: imageData.uri,
        type: imageData.type,
        name: imageData.fileName
      }
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
    const { user } = this.props;
    const { attachmentShown, input } = this.state;

    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            style={styles.input}
            placeholder="Masukkan Pesan"
            onChangeText={(newValue) =>
              this.setState((prevState) => ({ ...prevState, input: newValue }))}
            value={input}
          />
          <Button
            onPress={this.handlePicker}
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
                ? this.handleSubmit
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

        {attachmentShown && <RecordContainer user={user} />}
      </View>
    );
  }
}

InputBar.propTypes = propTypes;
InputBar.defaultProps = defaultProps;

export default InputBar;
