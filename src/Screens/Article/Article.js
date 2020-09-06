import React from 'react';
import { View, FlatList } from 'react-native';
import { ArticleCard } from './Components';
import mockData from './mockData';
import * as styles from './styles';

const Article = () => {
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
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
      />
    </View>
  );
};

export default Article;
