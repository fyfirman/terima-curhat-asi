import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@ubaids/react-native-material-textfield';
import { Colors } from '../../Theme';
import styles from './styles';

const propTypes = {};

const defaultProps = {};

const TextInput = (props) => {
  const { ...rest } = props;

  return (
    <TextField
      {...rest}
      baseColor={Colors.textSecondary}
      tintColor={Colors.java}
    />
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
