/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { View, FlatList, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Internal
import { CoreServices, ChatServices } from '../../Services';
import { LoadingContent, EmptyInfo } from '../../Components';
import { FeedInfo, FeedsUsingInfo } from '../../Constant';
import * as styles from './styles';
import {
  ChatBubble,
  AppBar,
  InputBar,
  VoiceNoteBubble,
  FloatingInfo
} from './Components';
import { DateFormatter, UriHelper } from '../../Helper';

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

  useEffect(() => {
    const listenChatServices = () => {
      const socket = ChatServices.create(session);

      const privateChannel = socket.subscribe(
        `private-consultations.${consultation.id}`
      );

      privateChannel.bind(
        `consultation_posts.${consultation.id}`,
        (newMessage) => {
          setMessages((prevMessage) => [
            newMessage.consultationPost,
            ...prevMessage
          ]);
        }
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

    listenChatServices();
    fetchConsultationPost();
    parseInfo();
  }, []);

  const parseInfo = () => {
    const {
      age,
      bab,
      bak,
      feed,
      height,
      weight,
      other_food,
      feeds_using,
      other_food_given
    } = consultation.info;

    return [
      { label: 'Usia Bayi', info: `${age} minggu` },
      { label: 'Berat Badan Bayi', info: `${weight} kg` },
      { label: 'Panjang/Tinggi Badan Bayi', info: `${height} cm` },
      { label: 'Rata-rata BAK Bayi', info: `${bak} kali/hari` },
      { label: 'Rata-rata BAB Bayi', info: `${bab} kali/minggu` },
      { label: 'Asupan Bayi', info: FeedInfo[feed] },
      { label: 'Alat Pemberian ASI', info: FeedsUsingInfo[feeds_using] },
      {
        label: 'Makanan Lain yang diberikan',
        info: other_food_given !== '0' ? other_food : 'Tidak ada'
      }
    ];
  };

  const renderItem = ({ item }) => {
    if (item.voice_note_id !== null) {
      return (
        <VoiceNoteBubble
          senderName={item.user.profile?.name}
          time={DateFormatter.convertStringToDate(item.created_at)}
          self={item.user.id === user.id}
          voiceNote={UriHelper.getStorage(item.voice_note.original)}
          photoUri={item.user.profile?.picture?.original}
        />
      );
    }
    const chatBubble = (
      <ChatBubble
        senderName={item.user.profile?.name}
        message={item.message}
        time={DateFormatter.convertStringToDate(item.created_at)}
        self={item.user.id === user.id}
        imageResource={
          item.picture_id ? UriHelper.getStorage(item.picture.original) : null
        }
        photoUri={item.user.profile?.picture?.original}
      />
    );
    return chatBubble;
  };

  const renderChat = () => {
    if (messages.length !== 0) {
      return (
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          initialNumToRender={10}
          initialScrollIndex={messages - 1}
          inverted
        />
      );
    }
    return <EmptyInfo info="Tidak ada pesan" />;
  };

  return (
    <>
      <AppBar
        navigation={navigation}
        user={consultation.user}
        consultation={consultation}
      />
      <View style={styles.inner}>
        {!consultation.closed_by && (
          <InputBar user={user} consultation={consultation} />
        )}
        {isLoaded ? (
          renderChat()
        ) : (
          <LoadingContent containerStyles={styles.loadingContentStyles} />
        )}
        <FloatingInfo data={parseInfo()} />
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
