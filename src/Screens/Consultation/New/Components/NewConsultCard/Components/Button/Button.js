import React from 'react';
import PropTypes from 'prop-types';
import { TextButton } from 'react-native-material-buttons';
import { Colors } from '../../../../../../../Theme';
import * as styles from './styles';

const propTypes = {
  secondary: PropTypes.bool
};

const defaultProps = {
  secondary: false
};

const StyledButton = (props) => {
  const { secondary, ...rest } = props;

  return (
    <TextButton
      {...rest}
      color={secondary ? 'white' : Colors.java}
      titleStyle={styles.titleStyle}
      titleColor={secondary ? Colors.java : 'white'}
      style={styles.root}
    />
  );
};

StyledButton.propTypes = propTypes;
StyledButton.defaultProps = defaultProps;

export default StyledButton;
