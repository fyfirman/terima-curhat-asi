import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { Colors } from '../../Theme';
import * as styles from './styles';

const propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool
};

const defaultProps = {
  title: '',
  color: Colors.cerulean,
  disabled: false
};

const StyledButton = (props) => {
  const { color, title, disabled, ...rest } = props;

  return (
    <Button
      {...rest}
      mode="text"
      style={styles.root(!disabled ? color : Colors.textSecondary)}
      labelStyle={styles.labelStyle}
    >
      {title}
    </Button>
  );
};

StyledButton.propTypes = propTypes;
StyledButton.defaultProps = defaultProps;

export default StyledButton;
