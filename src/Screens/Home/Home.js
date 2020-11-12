import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
  ToastAndroid
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SessionAction, UserAction } from '../../Redux/Actions';

// Services
import { CoreServices } from '../../Services';

// UI
import * as styles from './styles';
import { ArticleCard } from '../../Components';
import { HeaderHome } from '../../assets/svg';
import Menu from './Components/Menu/Menu';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  setUser: PropTypes.func.isRequired
};

const defaultProps = {};

const Home = (props) => {
  const { navigation, setUser } = props;

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

  useEffect(() => {
    const fetchArticleList = () => {
      CoreServices.getArticleList().then(
        (res) => {
          setArticleList(res);
        },
        (error) => {
          ToastAndroid.show(error.message, ToastAndroid.LONG);
          console.error(error);
        }
      );
    };

    fetchArticleList();
  }, []);

  const [articleList, setArticleList] = useState([]);

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
          {articleList.length === 0 ? (
            <>
              <ArticleCard isEmpty />
              <ArticleCard isEmpty />
            </>
          ) : (
            <>
              {articleList.length === 1 ? (
                <>
                  <ArticleCard
                    title={articleList[0].title}
                    category={articleList[0].category.name}
                    tags={articleList[0].tags}
                    writer={articleList[0].creator.full_name}
                    url={articleList[0].show_api_url}
                  />
                  <ArticleCard isEmpty />
                </>
              ) : (
                <>
                  <ArticleCard
                    title={articleList[0].title}
                    category={articleList[0].category.name}
                    tags={articleList[0].tags}
                    writer={articleList[0].creator.full_name}
                    url={articleList[0].show_api_url}
                  />
                  <ArticleCard
                    title={articleList[1].title}
                    category={articleList[1].category.name}
                    tags={articleList[1].tags}
                    writer={articleList[1].creator.full_name}
                    url={articleList[1].show_api_url}
                  />
                </>
              )}
            </>
          )}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...SessionAction, ...UserAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);
