import React from 'react';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { Colors } from '../../Theme';
import * as styles from './styles';

const propTypes = {};

const defaultProps = {};

const StyledButton = (props) => {
  const { ...rest } = props;

  return (
    <TextButton
      {...rest}
      color={Colors.persianPink}
      titleStyle={styles.titleStyle}
      titleColor="white"
      style={styles.root}
    />
  );
};

StyledButton.propTypes = propTypes;
StyledButton.defaultProps = defaultProps;

export default StyledButton;
