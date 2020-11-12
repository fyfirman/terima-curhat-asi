import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import * as styles from './styles';

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ArticleViewer = (props) => {
  const { route } = props;
  const { url } = route.params;

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
};

ArticleViewer.propTypes = propTypes;
ArticleViewer.defaultProps = defaultProps;

export default ArticleViewer;
