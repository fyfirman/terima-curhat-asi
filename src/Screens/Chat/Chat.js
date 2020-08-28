import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import * as styles from './styles';
import { Button } from '../../Components';

const Chat = () => {
  const renderBubble = () => {
    const bubbles = [];
    for (let i = 0; i < 20; i++) {
      bubbles.push(<Text style={{ padding: 20 }}>{`Test ${i}`}</Text>);
    }
    return bubbles;
  };

  return (
    <View style={styles.inner}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ height: 40, flex: 1, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Masukkan Pesan"
        />
        <Button title="Kirim" />
        {/* <Button> */}
      </View>
      <ScrollView style={styles.bubbleContainer} invertStickyHeaders>
        {renderBubble()}
      </ScrollView>
    </View>
  );
};

export default Chat;
