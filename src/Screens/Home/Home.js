import React from 'react';
import { View, Text, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import * as styles from './styles';
import { Colors } from '../../Theme';

const Home = () => {
  return (
    <View contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="camera"
          color={Colors.java}
          size={20}
          onPress={() => {}}
        />
        <Text style={styles.primaryInfo}>{`Terima\nCurhat ASI`}</Text>
        <Image
          style={styles.vector}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.newArticle}>
        <Text style={styles.primaryInfo}>Artikel</Text>
        <Text style={styles.primaryInfo}>Lihat Semua</Text>
        <View style={styles.articleContainer}>
          <Text style={styles.primaryInfo}>Artikel 2</Text>
          <Text style={styles.primaryInfo}>Artikel 2</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <Text style={styles.primaryInfo}>Konsultasi</Text>
        <Text style={styles.primaryInfo}>Artikel</Text>
      </View>
    </View>
  );
};

export default Home;
