import React, { useState } from 'react';
import WebView from 'react-native-webview';
import PropTypes from 'prop-types';

const propTypes = {
  source: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const CustomHeaderWebView = (props) => {
  const { source, ...restProps } = props;
  const [currentURI, setURI] = useState(source.uri);
  const newSource = { ...source, uri: currentURI };

  return (
    <WebView
      {...restProps}
      source={newSource}
      onShouldStartLoadWithRequest={(request) => {
        // If we're loading the current URI, allow it to load
        if (request.url === currentURI) return true;
        // We're loading a new URL -- change state first
        setURI(request.url);
        return false;
      }}
    />
  );
};

CustomHeaderWebView.propTypes = propTypes;
CustomHeaderWebView.defaultProps = defaultProps;

export default CustomHeaderWebView;
