import React, { useState, useEffect } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useMutation } from 'react-query';
import { Colors } from '../../Theme';
import { TextInput, Button } from '../../Components';
import * as styles from './styles';
import CoreServices from '../../Services/CoreServices/CoreServices';

const ForgotPIN = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const { keyboardShown } = useKeyboard();

  const mutation = useMutation(
    () => CoreServices.postForgotPassword({ phone_number: phoneNumber }),
    {
      onError: (error) => {
        console.error(error);
        ToastAndroid.show(
          error.response?.data.message ?? error.message,
          ToastAndroid.LONG
        );
      }
    }
  );

  const handlePress = () => {
    mutation.mutate();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
    >
      <View style={styles.inner}>
        <Text style={styles.primaryInfo}>Lupa dengan PIN keamanan anda?</Text>
        <Text style={styles.secondaryInfo}>
          Tenang! Kami akan mengirim link untuk mengganti PIN via SMS ke nomor
          HP anda
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Nomor HP"
            keyboardType="phone-pad"
            placeholder="081234567890"
            onChangeText={setPhoneNumber}
            disabled={mutation.isLoading}
          />
        </View>
        <View style={styles.buttonLogin}>
          <Button
            color={Colors.cerulean}
            title="Kirim"
            onPress={handlePress}
            disabled={mutation.isLoading}
          />
        </View>

        {mutation.isSuccess && (
          <Text>Permintaan telah dikirim, mohon cek pesan masuk SMS anda.</Text>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPIN;
