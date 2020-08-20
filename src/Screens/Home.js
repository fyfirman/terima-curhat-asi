import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff'
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontWeight: 'bold'
            }}
          >
            Selamat Datang
          </Text>
          <Text
            style={{
              fontSize: 24
            }}
          >
            Mira Suryani
          </Text>
        </View>
        <View
          style={{
            flex: 2
          }}
        >
          <TouchableOpacity>
            <Text>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Literasi</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Ruang Konsultasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
