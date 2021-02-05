import React from 'react';
import PropTypes from 'prop-types';
import { Linking, Text } from 'react-native';
import * as styles from './styles';
import { StringHelper } from '../../Helper';

const propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any)
};

const defaultProps = {
  style: {}
};

const HighlightUrlText = (props) => {
  const { children, style } = props;

  const openUrl = (url) => {
    Linking.openURL(url.includes('http') ? url : `https://${url}`);
  };

  const formatUrl = () =>
    children.split(' ').map((word) => {
      if (StringHelper.isUrl(word)) {
        return (
          <Text
            onPress={() => openUrl(word)}
            style={{ ...styles.hightlight, ...style }}
          >
            {`${word} `}
          </Text>
        );
      }
      return <Text style={style}>{`${word} `}</Text>;
    });

  return <Text>{formatUrl()}</Text>;
};

HighlightUrlText.propTypes = propTypes;
HighlightUrlText.defaultProps = defaultProps;

export default HighlightUrlText;
