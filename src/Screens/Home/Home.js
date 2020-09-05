import React from 'react';
import { View, Text, Image } from 'react-native';
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
          <Text style={styles.seeMore}>Lihat Semua</Text>
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
          <Menu iconName="chatbubbles-outline" title="Konsultasi" />
          <Menu iconName="newspaper-outline" title="Artikel" />
        </View>
      </View>
    </View>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
