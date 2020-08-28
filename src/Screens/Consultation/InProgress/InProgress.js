import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as styles from './styles';
import { ChatItem } from '../Components';

const InProgress = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  const renderCard = () => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(
        <ChatItem
          key={i}
          name="Dessy"
          message="Halo ibu, selamat siang allsalsaldlasdl dsa dlas dasj"
          time={new Date(2020, 7, 28, 11, 23)}
        />
      );
    }
    return cards;
  };

  return (
    <>
      {!isEmpty ? (
        <ScrollView style={styles.container}>{renderCard()}</ScrollView>
      ) : (
        <View style={styles.infoContainer}>
          <Text style={styles.emptyInfo}>
            {`Tidak ada konsultasi\nyang sedang berjalan`}
          </Text>
        </View>
      )}
    </>
  );
};

export default InProgress;
