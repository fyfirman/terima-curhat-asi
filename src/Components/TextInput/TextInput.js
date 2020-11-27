import React from 'react';
import { TextInput } from 'react-native-paper';
import { Colors, FontFamily } from '../../Theme';
import * as styles from './styles';

const propTypes = {};

const defaultProps = {};

const StyledTextInput = (props) => {
  const { ...rest } = props;

  return (
    <TextInput
      {...rest}
      mode="flat"
      underlineColor={Colors.cerulean}
      style={styles.root}
      theme={{
        colors: { primary: Colors.cerulean }
      }}
    />
  );
};

StyledTextInput.propTypes = propTypes;
StyledTextInput.defaultProps = defaultProps;

export default StyledTextInput;
