import React from 'react';
import PropTypes from 'prop-types';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { Colors } from '../../Theme';
import * as styles from './styles';

const propTypes = {
  color: PropTypes.string
};

const defaultProps = {
  color: Colors.persianPink
};

const StyledButton = (props) => {
  const { color, ...rest } = props;

  return (
    <TextButton
      {...rest}
      color={color}
      titleStyle={styles.titleStyle}
      titleColor="white"
      style={styles.root}
    />
  );
};

StyledButton.propTypes = propTypes;
StyledButton.defaultProps = defaultProps;

export default StyledButton;