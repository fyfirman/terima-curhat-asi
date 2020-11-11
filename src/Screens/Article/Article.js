import React, { useState, useEffect } from 'react';
import { View, FlatList, ToastAndroid, Text } from 'react-native';
import { ArticleCard } from './Components';
import mockData from './mockData';
import * as styles from './styles';

// Services
import { EmptyInfo } from '../../Components';
import { CoreServices } from '../../Services';

const Article = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const fetchArticleList = () => {
      CoreServices.getArticleList().then(
        (res) => {
          console.log(res);
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
        content={item.content}
        first={index === 0}
        last={index === mockData.length - 1}
      />
    );
  };

  return (
    <View style={styles.container}>
      {articleList.length !== 0 ? (
        <FlatList
          data={mockData}
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

export default Article;
