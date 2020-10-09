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
      const socket = ChatServices.create(session);

      const presence = socket.subscribe(`presence-global.${user.id}`);
      presence.bind('pusher:subscription_succeeded', () =>
        presence.bind('join', (data) => console.log(data))
      );
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
      title: 'Pilih foto',
      takePhotoButtonTitle: 'Buka kamera',
      chooseFromLibraryButtonTitle: 'Pilih dari galeri',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: `data:image/jpeg;base64,${response.data}` };
        setImageResource(source);
        setMessages((oldMessage) => [
          {
            user,
            message: '',
            created_at: new Date().toISOString(),
            imageResource: source
          },
          ...oldMessage
        ]);
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
      imageResource={item.imageResource}
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
