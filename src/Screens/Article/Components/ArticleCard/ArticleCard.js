import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import * as styles from './styles';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  ava: PropTypes.string,
  first: PropTypes.bool,
  last: PropTypes.bool
};

const defaultProps = {
  title: '',
  content: '',
  ava: '',
  first: false,
  last: false
};

const ArticleCard = (props) => {
  const { title, content, ava, first, last } = props;

  return (
    <TouchableOpacity style={styles.root({ first, last })} onPress={() => {}}>
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
  );
};

ArticleCard.propTypes = propTypes;
ArticleCard.defaultProps = defaultProps;

export default ArticleCard;
