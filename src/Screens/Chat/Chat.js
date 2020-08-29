import React from 'react';
import { View, TextInput, FlatList } from 'react-native';
import * as styles from './styles';
import { ChatBubble } from './Components';
import { Button } from '../../Components';
import mockData from './mockData';

const Chat = () => {
  const renderItem = ({ item }) => (
    <ChatBubble
      senderName={item.senderName}
      message={item.message}
      time={item.time}
      self={item.self}
    />
  );

  return (
    <View style={styles.inner}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Masukkan Pesan" />
        <Button style={styles.sendButton} title="Kirim" />
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
  );
};

export default Chat;
