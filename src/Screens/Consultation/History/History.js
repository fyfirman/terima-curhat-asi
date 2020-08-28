import React from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import * as styles from './styles';

const History = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
    >
      <View style={styles.inner}>
        <Text style={styles.primaryInfo}>
          {`Tidak ada konsultasi\nyang sudah selesai`}
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default History;
