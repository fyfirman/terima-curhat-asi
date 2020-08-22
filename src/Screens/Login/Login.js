import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { HeaderLogin } from '../../assets/svg';
import { TextInput, ComboInput, Button } from '../../Components';
import * as styles from './styles';

const Login = () => {
  const [formState, setFormState] = useState({
    phoneNumber: '',
    pin: '',
    role: '',
    uncryptedPin: ''
  });

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const { keyboardShown } = useKeyboard();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
    >
      <View style={styles.inner}>
        <View style={styles.headerContainer}>
          <HeaderLogin
            width="100%"
            height="100%"
            style={styles.headerBackground}
          />
          <View style={styles.headerContent}>
            <Image
              style={styles.logo(keyboardShown)}
              source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.title}>
              <Text style={styles.titleWhite}>Curhat</Text>
              <Text style={styles.titlePink}>ASI</Text>
            </Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Nomor HP"
            keyboardType="phone-pad"
            prefix="+62"
            placeholder="Masukkan nomor"
            onChangeText={(value) => {
              setFormState({ ...formState, phoneNumber: value });
            }}
          />
          <TextInput
            label="PIN"
            keyboardType="number-pad"
            placeholder="Masukkan 6 digit nomor rahasia"
            secureTextEntry
            onChangeText={(value) => {
              setFormState({ ...formState, pin: value });
            }}
          />
          <ComboInput
            label="Sebagai"
            onChange={(node) => {
              const { value } = node;
              setFormState({ ...formState, role: value });
            }}
            items={[
              { value: 'kader', label: 'Kader' },
              { value: 'bidan', label: 'Bidan' },
              { value: 'doctor', label: 'Dokter Umum' },
              { value: 'specialist', label: 'Spesialis/Konselor' }
            ]}
          />
          <View style={styles.buttonLogin}>
            <Button title="Masuk" onPress={() => {}} />
          </View>
          <View style={styles.forgotTextContainer}>
            <Text style={styles.forgotPinText}>Anda lupa PIN? </Text>
            <TouchableOpacity
              style={styles.touchHereContainer}
              onPress={() => {}}
            >
              <Text style={styles.touchHereText}>Sentuh disini</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
