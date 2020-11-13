/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CustomHeaderWebView } from '../../Components';
import store from '../../Redux/store';

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ArticleViewer = (props) => {
  const { route } = props;
  const { url } = route.params;

  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = () => {
      const { session } = store.getState();
      return `${session.tokenType} ${session.accessToken}`;
    };

    setToken(getToken());
  }, []);

  return (
    <CustomHeaderWebView
      source={{
        uri: url,
        headers: {
          Authorization: token
        }
      }}
      style={{ flex: 1 }}
    />
  );
};

ArticleViewer.propTypes = propTypes;
ArticleViewer.defaultProps = defaultProps;

export default ArticleViewer;
