import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ArticleViewer = (props) => {
  const { navigation } = props;

  useEffect(() => {
    // effect
  }, []);

  const [state, setstate] = useState();

  return (
    <View>
      <Text>ArticleViewer</Text>
    </View>
  );
};

ArticleViewer.propTypes = propTypes;
ArticleViewer.defaultProps = defaultProps;

export default ArticleViewer;
