import React, { useEffect, useState } from 'react';
import { View, FlatList, ToastAndroid, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Internal
import { CoreServices, ChatServices } from '../../Services';
import { LoadingContent } from '../../Components';
import * as styles from './styles';
import { ChatBubble, AppBar, Input } from './Components';
import { DateFormatter } from '../../Helper';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  session: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Chat = (props) => {
  const { navigation, route, user, session } = props;
  const { consultation } = route.params;

  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [imageResource, setImageResource] = useState(null);

  useEffect(() => {
    const listenChatServices = () => {
      ChatServices.get(session)
        .private(`chat.${consultation.id}`)
        .listen('ConsultationPostSent', (data) => {
          setMessages((prevMessages) => [
            data.consultationPost,
            ...prevMessages
          ]);
        });
    };

    const fetchConsultationPost = () => {
      CoreServices.getConsultationPost(consultation.id).then(
        (res) => {
          setMessages(res);
          setIsLoaded(true);
        },
        (error) => {
          ToastAndroid.show(error.message, ToastAndroid.LONG);
          console.log(error);
        }
      );
    };

    // listenChatServices();
    fetchConsultationPost();
  }, []);

  const requestPickerPermission = async () => {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Terima Curhat ASI ',
          message: 'Terima Curhat ASI meminta akses kamera '
        }
      );
      const externalStoragePermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Terima Curhat ASI ',
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
  };

  const handlePicker = async () => {
    const cameraPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    const externalStoragePermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );

    if (!cameraPermission && !externalStoragePermission) {
      requestPickerPermission();
    }

    const options = {
      title: 'Select Images',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImageResource(source);
      }
    });
  };

  const handleSubmit = () => {
    setInput('');

    CoreServices.postStoreConsultationPost(consultation.id, {
      message: input
    }).then(
      (res) => {
        console.log(res);
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
  };

  const renderItem = ({ item }) => (
    <ChatBubble
      senderName={item.user.profile.name}
      message={item.message}
      time={DateFormatter.convertStringToDate(item.created_at)}
      self={item.user.id === user.id}
    />
  );

  return (
    <>
      <AppBar navigation={navigation} user={consultation.user} />
      <View style={styles.inner}>
        <Input
          handleSubmit={handleSubmit}
          handlePicker={handlePicker}
          input={input}
          setInput={setInput}
        />
        {isLoaded ? (
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            initialNumToRender={10}
            initialScrollIndex={messages - 1}
            inverted
          />
        ) : (
          <LoadingContent containerStyles={styles.loadingContentStyles} />
        )}
      </View>
    </>
  );
};

Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  user: state.user,
  session: state.session
});

export default connect(mapStateToProps)(Chat);
