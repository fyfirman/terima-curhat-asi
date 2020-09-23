import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, ToastAndroid } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Internal
import { CoreServices } from '../../Services';
import { LoadingContent } from '../../Components';
import * as styles from './styles';
import { ChatBubble, AppBar } from './Components';
import { DateFormatter } from '../../Helper';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Chat = (props) => {
  const { navigation, route, user } = props;
  const { consultation } = route.params;

  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
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
  }, []);

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

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Chat);
