import React, { useState, useEffect } from 'react';
import { View, FlatList, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import mockData from './mockData';
import * as styles from './styles';

// Services
import { EmptyInfo, ArticleCard } from '../../Components';
import { CoreServices } from '../../Services';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Article = (props) => {
  const { navigation } = props;

  const [articleList, setArticleList] = useState([]);

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

  const renderItem = ({ item, index }) => {
    return (
      <ArticleCard
        title={item.title}
        category={item.category.name}
        tags={item.tags}
        writer={item.creator.full_name}
        url={item.show_api_url}
        first={index === 0}
        last={index === mockData.length - 1}
        style={styles.articleCard}
        onPress={() => navigation.navigate('ArticleViewer')}
      />
    );
  };

  return (
    <View style={styles.container}>
      {articleList.length !== 0 ? (
        <FlatList
          data={articleList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={10}
        />
      ) : (
        <EmptyInfo info="Artikel belum ada" />
      )}
    </View>
  );
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
