import React from 'react';
import { View, Text } from 'react-native';
import * as styles from './styles';

const Help = () => {
  return (
    <View style={styles.inner}>
      <Text style={styles.primaryInfo}>Help Page</Text>
      <Text style={styles.secondaryInfo}>Ini help page</Text>
    </View>
  );
};

export default Help;
