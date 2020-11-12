import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import * as styles from './styles';

const propTypes = {
  title: PropTypes.string,
  writer: PropTypes.string,
  category: PropTypes.string,
  isEmpty: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func
};

const defaultProps = {
  title: '',
  writer: '',
  category: '',
  isEmpty: false,
  tags: [],
  style: {},
  onPress: () => {}
};

const ArticleCard = (props) => {
  const { title, category, writer, isEmpty, onPress, tags, style } = props;

  const getTagsName = () => tags.map((tag) => tag.name).join(', ');

  return !isEmpty ? (
    <TouchableOpacity style={{ ...styles.root, ...style }} onPress={onPress}>
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
