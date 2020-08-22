import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { HeaderLogin } from '../../assets/svg';
import { TextInput, ComboInput, Button } from '../../Components';
import * as styles from './styles';

const ForgotPIN = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);

  const { keyboardShown } = useKeyboard();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
    >
      <View style={styles.inner}>
        <Icon name="chevron-back-outline" size={50} color="red" />
        <View style={styles.buttonLogin}>
          <Button title="Masuk" onPress={() => {}} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPIN;
