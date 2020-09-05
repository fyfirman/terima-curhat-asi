import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import * as styles from './styles';
import ArticleCard from './Components/ArticleCard/ArticleCard';
import { HeaderHome } from '../../assets/svg';
import Menu from './Components/Menu/Menu';

const propTypes = { navigation: PropTypes.objectOf(PropTypes.any).isRequired };

const defaultProps = {};

const Home = (props) => {
  const { navigation } = props;

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', BackHandler.exitApp);

      return () =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          BackHandler.exitApp
        );
    }, [])
  );

  return (
    <View contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <HeaderHome
          width="100%"
          height="100%"
          style={styles.headerBackground}
        />
        <Button
          icon="menu"
          mode="contained"
          labelStyle={styles.menuIcon}
          onPress={() => navigation.openDrawer()}
          style={styles.menuButton}
        />
        <View style={styles.headerBottom}>
          <Text style={styles.headings}>{`Terima\nCurhat ASI`}</Text>
          <Image
            style={styles.vector}
            source={require('../../assets/images/vector.png')}
          />
        </View>
      </View>
      <View style={styles.newArticle}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleSection}>Artikel Terbaru</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Article')}>
            <Text style={styles.seeMore}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.articleContainer}>
          <ArticleCard
            title="Studi: Antibodi Virus Corona Ditemukan pada ASI"
            content="Para peneliti di Rumah Sakit Emma UMC Amsterdam, Belanda, menemukan antibodi terhadap virus corona dalam"
          />
          <ArticleCard
            title="Studi: Antibodi Virus Corona Ditemukan pada ASI"
            content="Para peneliti di Rumah Sakit Emma UMC Amsterdam, Belanda, menemukan antibodi terhadap virus corona dalam"
          />
        </View>
      </View>
      <View style={styles.menu}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleSection}>Menu</Text>
        </View>
        <View style={styles.menuItems}>
          <Menu
            iconName="chatbubbles-outline"
            title="Konsultasi"
            onPress={() => navigation.navigate('Consultation')}
          />
          <Menu
            iconName="newspaper-outline"
            title="Artikel"
            onPress={() => navigation.navigate('Article')}
          />
        </View>
      </View>
    </View>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
