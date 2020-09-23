import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { ChatBubble, AppBar } from './Components';
import { CoreServices } from '../../Services';
import { LoadingContent } from '../../Components';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Chat = (props) => {
  const { navigation, route } = props;
  const { consultation } = route.params;

  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    CoreServices.getConsultationPost(consultation.id).then(
      (res) => {
        setMessages(res);
        console.log(res);
        setIsLoaded(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const renderItem = ({ item }) => (
    <ChatBubble
      senderName={item.user.profile.name}
      message={item.message}
      time={new Date(item.created_at)} // TODO: fix dates
      self
    />
  );

  return (
    <>
      <AppBar navigation={navigation} user={consultation.user} />
      <View style={styles.inner}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Masukkan Pesan" />
          <Button
            style={styles.sendButton}
            labelStyle={styles.buttonIcon}
            contentStyle={styles.contentStyle}
            icon="send"
            mode="contained"
            size={20}
            compact
          />
        </View>
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

export default Chat;
