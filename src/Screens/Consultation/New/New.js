import React, { useState } from 'react';
import { View, Text } from 'react-native';
import * as styles from './styles';
import { NewConsultCard } from './Components';

const New = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const renderCard = () => {
    const cards = [];
    for (let i = 0; i < 5; i++) {
      cards.push(<NewConsultCard key={i} name="Dessy" />);
    }
    return cards;
  };

  return (
    <View style={styles.container}>
      {!isEmpty ? (
        renderCard()
      ) : (
        <View style={styles.infoContainer}>
          <Text style={styles.emptyInfo}>
            {`Tidak ada konsultasi\nyang baru`}
          </Text>
        </View>
      )}
    </View>
  );
};

export default New;
