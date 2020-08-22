import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../../Components/Input';
import * as Styles from '../../Styles';
import Combo from '../../Components/Combo';

const Login = () => {
  const [formState, setFormState] = useState({
    phoneNumber: '',
    pin: '',
    role: ''
  });

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
        <Input
          label="Nomor HP"
          placeholder="Contoh 081xxxxxxxxx"
          keyboardType="phone-pad"
          onChangeText={(value) => {
            setFormState({ ...formState, phoneNumber: value });
          }}
          align="center"
        />
        <Input
          label="PIN"
          placeholder="6 digit nomor rahasia"
          keyboardType="phone-pad"
          secureTextEntry
          align="center"
          onChangeText={(value) => {
            setFormState({ ...formState, pin: value });
          }}
          style={{
            marginVertical: 16
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
