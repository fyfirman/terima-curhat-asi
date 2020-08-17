import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Input from '../Components/Input';
import * as Styles from '../Styles';
import Combo from '../Components/Combo';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: '',
      pin: '',
      as: '',
    };
  }
  render() {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          animated={true}
          translucent={true}
          backgroundColor={'#ffffff'}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingVertical: 16,
            paddingHorizontal: 32,
            backgroundColor: '#ffffff',
          }}>
          <View>
            <Input
              label="Nomor HP"
              placeholder="Contoh 081xxxxxxxxx"
              keyboardType="phone-pad"
              onChangeText={(text) => {
                this.setState({phone_number: text});
              }}
              align="center"
            />
            <Input
              label="PIN"
              placeholder="6 digit nomor rahasia"
              keyboardType="phone-pad"
              secureTextEntry={true}
              align="center"
              onChangeText={(text) => {
                this.setState({pin: text});
              }}
              style={{
                marginVertical: 16,
              }}
            />
            <View
              style={{
                marginBottom: 48,
              }}>
              <Text style={{...Styles.label, ...{textAlign: 'center', marginBottom: 8}}}>Sebagai</Text>
              <Combo
                onChange={(node) => {
                  const {value} = node;
                  this.setState({as: value});
                }}
                items={[
                  {value: 'kdr', label: 'Kader'},
                  {value: 'bdn', label: 'Bidan'},
                  {value: 'du', label: 'Dokter Umum'},
                  {value: 'dsp', label: 'Spesialis/Konselor'},
                ]}
              />
            </View>
            <TouchableOpacity style={Styles.buttonPrimary}>
              <Text style={Styles.buttonPrimaryLabel}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Styles.button, ...{marginVertical: 24}}}>
              <Text style={Styles.buttonLabel}>Lupa PIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
