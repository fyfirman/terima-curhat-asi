import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import * as styles from './styles';

const propTypes = {
  title: PropTypes.string,
  writer: PropTypes.string,
  category: PropTypes.string,
  isEmpty: PropTypes.bool,
  url: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object)
};

const defaultProps = {
  title: '',
  writer: '',
  category: '',
  isEmpty: false,
  url: '',
  tags: []
};

const ArticleCard = (props) => {
  const { title, category, writer, isEmpty, url, tags } = props;

  const getTagsName = () => tags.map((tag) => tag.name).join(', ');

  return !isEmpty ? (
    <TouchableOpacity style={styles.root} onPress={() => {}}>
      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.content}>{`Ditulis oleh : ${writer}`}</Text>
        <Text style={styles.content}>{`Kategori : ${category}`}</Text>
        <Text style={styles.content}>{`Tag : ${getTagsName()}`}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.emptyContainer} onPress={() => {}}>
      <Text>Artikel kosong</Text>
    </TouchableOpacity>
  );
};

ArticleCard.propTypes = propTypes;
ArticleCard.defaultProps = defaultProps;

export default ArticleCard;
