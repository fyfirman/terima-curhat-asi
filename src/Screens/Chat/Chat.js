import React, { useEffect, useState } from 'react';
import { View, FlatList, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Internal
import { CoreServices, ChatServices } from '../../Services';
import { LoadingContent, EmptyInfo } from '../../Components';
import * as styles from './styles';
import { ChatBubble, AppBar, InputBar, VoiceNoteBubble } from './Components';
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

      const privates = socket.subscribe(`private-chat.${consultation.id}`);

      privates.bind('App\\Events\\ConsultationPostSent', (newMessage) => {
        setMessages((prevMessage) => [
          newMessage.consultationPost,
          ...prevMessage
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

    listenChatServices();
    fetchConsultationPost();
  }, []);

  const renderItem = ({ item }) => {
    if (item.voice_note_id !== null) {
      return (
        <VoiceNoteBubble
          senderName={item.user.profile.name}
          time={DateFormatter.convertStringToDate(item.created_at)}
          self={item.user.id === user.id}
          voiceNote={UriHelper.getStorage(item.voice_note.original)}
        />
      );
    }
    return (
      <ChatBubble
        senderName={item.user.profile.name}
        message={item.message}
        time={DateFormatter.convertStringToDate(item.created_at)}
        self={item.user.id === user.id}
        imageResource={
          item.picture_id ? UriHelper.getStorage(item.picture.original) : null
        }
      />
    );
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
          messages.length !== 0 ? (
            <FlatList
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              initialNumToRender={10}
              initialScrollIndex={messages - 1}
              inverted
            />
          ) : (
            <EmptyInfo
              info="Tidak ada pesan"
              style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            />
          )
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
