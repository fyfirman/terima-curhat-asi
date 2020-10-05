import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import * as styles from './styles';

const propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const defaultProps = {};

const InputChat = (props) => {
  const { input, setInput, handleSubmit } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Pesan"
        onChangeText={setInput}
        value={input}
      />
      <Button
        onPress={handleSubmit}
        style={styles.sendButton}
        labelStyle={styles.buttonIcon}
        contentStyle={styles.contentStyle}
        icon="send"
        mode="contained"
        size={20}
        compact
      />
    </View>
  );
};

InputChat.propTypes = propTypes;
InputChat.defaultProps = defaultProps;

export default InputChat;
