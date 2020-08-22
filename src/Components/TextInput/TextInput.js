import React from 'react';
import { TextField } from '@ubaids/react-native-material-textfield';
import { Colors } from '../../Theme';
import * as styles from './styles';

const propTypes = {};

const defaultProps = {};

const TextInput = (props) => {
  const { ...rest } = props;

  return (
    <TextField
      {...rest}
      baseColor={Colors.textSecondary}
      tintColor={Colors.java}
      style={styles.root}
      inputContainerStyle={styles.inputContainerStyle}
      labelTextStyle={styles.labelTextStyle}
      titleTextStyle={styles.titleTextStyle}
      affixTextStyle={styles.affixTextStyle}
      lineWidth={1}
    />
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
