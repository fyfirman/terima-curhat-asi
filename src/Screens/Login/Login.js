import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { HeaderLogin } from '../../assets/svg';
import { TextInput, ComboInput } from '../../Components';
import * as Styles from './Styles';

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

  return (
    <KeyboardAvoidingView style={Styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.inner}>
          <View style={Styles.headerContainer}>
            <HeaderLogin width="100%" height="100%" style={Styles.header} />
            <View style={Styles.headerContent}>
              <Text>
                <Text>Curhat</Text>
                <Text>ASI</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingVertical: 16,
              paddingHorizontal: 32,
              backgroundColor: '#ffffff'
            }}
          >
            <View>
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
              <TouchableOpacity style={Styles.buttonPrimary}>
                <Text style={Styles.buttonPrimaryLabel}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...Styles.button, ...{ marginVertical: 24 } }}
              >
                <Text style={Styles.buttonLabel}>Lupa PIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
