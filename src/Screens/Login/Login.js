import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from '../../Components';
import Combo from '../../Components/Combo';
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
        <View
          style={{
            marginBottom: 48
          }}
        >
          <Text
            style={{
              ...Styles.label,
              ...{ textAlign: 'center', marginBottom: 8 }
            }}
          >
            Sebagai
          </Text>
          <Combo
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
        </View>
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
  );
};

export default Login;
