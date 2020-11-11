import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import * as styles from './styles';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  ava: PropTypes.string,
  isEmpty: PropTypes.bool
};

const defaultProps = {
  title: '',
  content: '',
  ava: '',
  isEmpty: false
};

const ArticleCard = (props) => {
  const { title, content, ava, isEmpty } = props;

  return !isEmpty ? (
    <TouchableOpacity style={styles.root} onPress={() => {}}>
      <Image
        style={styles.ava}
        source={require('../../../../assets/images/logo.png')}
      />
      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.content}>
          {content}
        </Text>
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
