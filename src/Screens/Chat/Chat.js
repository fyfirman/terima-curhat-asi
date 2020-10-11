import React, { useEffect, useState } from 'react';
import { View, FlatList, ToastAndroid } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Internal
import { CoreServices, ChatServices } from '../../Services';
import { LoadingContent } from '../../Components';
import * as styles from './styles';
import { ChatBubble, AppBar, InputBar } from './Components';
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

  const renderItem = ({ item }) => (
    <ChatBubble
      senderName={item.user.profile.name}
      message={item.message}
      time={DateFormatter.convertStringToDate(item.created_at)}
      self={item.user.id === user.id}
      imageResource={
        item.picture_id ? UriHelper.getImages(item.picture.original) : null
      }
    />
  );

  return (
    <>
      <AppBar navigation={navigation} user={consultation.user} />
      <View style={styles.inner}>
        <InputBar user={user} consultation={consultation} />
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
