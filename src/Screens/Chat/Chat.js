import React, { useEffect } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { ChatBubble, AppBar } from './Components';
import { CoreServices } from '../../Services';
import mockData from './mockData';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Chat = (props) => {
  const { navigation, route } = props;
  const { consultation } = route.params;

  useEffect(() => {
    CoreServices.getConsultationPost(consultation.id).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const renderItem = ({ item }) => (
    <ChatBubble
      senderName={item.senderName}
      message={item.message}
      time={item.time}
      self={item.self}
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
        <FlatList
          data={mockData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          initialNumToRender={10}
          initialScrollIndex={mockData - 1}
          inverted
        />
      </View>
    </>
  );
};

Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;

export default Chat;
