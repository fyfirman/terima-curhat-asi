import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { Colors } from '../../Theme';
import { TextInput, Button } from '../../Components';
import * as styles from './styles';

const Consultation = () => {
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
        <Text style={styles.primaryInfo}>Lupa dengan PIN keamanan anda?</Text>
        <Text style={styles.secondaryInfo}>
          Tenang! Kami akan mengirim PIN sementara via SMS ke nomor HP anda
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Nomor HP"
            keyboardType="phone-pad"
            prefix="+62"
            placeholder="Masukkan nomor"
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={styles.buttonLogin}>
          <Button color={Colors.java} title="Kirim" onPress={() => {}} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Consultation;
