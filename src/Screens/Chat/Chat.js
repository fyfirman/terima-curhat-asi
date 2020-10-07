import React, { useEffect, useState } from 'react';
import { View, FlatList, ToastAndroid } from 'react-native';
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

    listenChatServices();
    fetchConsultationPost();
  }, []);

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
        <Input handleSubmit={handleSubmit} input={input} setInput={setInput} />
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
