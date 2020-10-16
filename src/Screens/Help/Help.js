import React from 'react';
import { View, Text } from 'react-native';
import * as styles from './styles';

const Help = () => {
  return (
    <View style={styles.inner}>
      <Text style={styles.primaryInfo}>Halaman bantuan belum tersedia</Text>
      <Text style={styles.secondaryInfo}>Tunggu update dari aplikasi</Text>
    </View>
  );
};

export default Help;
