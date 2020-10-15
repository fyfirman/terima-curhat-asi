import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { Colors } from '../../../../../../../Theme';
import * as styles from './styles';

const propTypes = {
  title: PropTypes.string,
  secondary: PropTypes.bool
};

const defaultProps = {
  title: '',
  secondary: false
};

const StyledButton = (props) => {
  const { secondary, title, ...rest } = props;

  return (
    <Button
      {...rest}
      mode="text"
      style={styles.root(secondary ? 'white' : Colors.java)}
      labelStyle={styles.labelStyle(secondary ? Colors.java : 'white')}
    >
      {title}
    </Button>
  );
};

StyledButton.propTypes = propTypes;
StyledButton.defaultProps = defaultProps;

export default StyledButton;
