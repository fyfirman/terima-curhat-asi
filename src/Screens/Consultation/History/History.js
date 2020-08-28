import React, { useState } from 'react';
import { View, Text } from 'react-native';
import * as styles from './styles';

const History = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <View style={styles.container}>
      {!isEmpty ? (
        <Text> Not implemented </Text>
      ) : (
        <View style={styles.infoContainer}>
          <Text style={styles.emptyInfo}>
            {`Tidak ada konsultasi\nyang sudah selesai`}
          </Text>
        </View>
      )}
    </View>
  );
};

export default History;
