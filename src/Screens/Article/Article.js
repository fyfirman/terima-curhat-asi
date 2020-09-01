import React from 'react';
import { View, FlatList } from 'react-native';
import { ArticleCard } from './Components';
import mockData from './mockData';
import * as styles from './styles';

const Article = () => {
  const renderItem = ({ item }) => {
    return <ArticleCard title={item.title} content={item.content} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
      />
    </View>
  );
};

export default Article;
