import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as styles from './styles';
import { NewConsultCard } from './Components';

const New = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  const renderCard = () => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(<NewConsultCard key={i} name="Dessy" />);
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
            {`Tidak ada konsultasi\nyang baru`}
          </Text>
        </View>
      )}
    </>
  );
};

export default New;
