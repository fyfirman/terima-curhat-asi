import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
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

  const [attachmentShown, setAttachmentShown] = useState(false);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Masukkan Pesan"
          onChangeText={setInput}
          value={input}
        />
        <Button
          onPress={() => {}}
          style={styles.attachmentButton}
          labelStyle={styles.attachmentButtonIcon}
          contentStyle={styles.contentStyle}
          icon="message-image-outline"
          mode="contained"
          size={20}
          compact
        />
        <Button
          onPress={
            input !== ''
              ? handleSubmit
              : () => {
                  setAttachmentShown(!attachmentShown);
                }
          }
          style={styles.sendButton}
          labelStyle={styles.buttonIcon}
          contentStyle={styles.contentStyle}
          icon={input !== '' ? 'send' : 'microphone'}
          mode="contained"
          size={20}
          compact
        />
      </View>

      {attachmentShown && (
        <View style={styles.attachmentContainer}>
          <Text>VN</Text>
        </View>
      )}
    </View>
  );
};

InputChat.propTypes = propTypes;
InputChat.defaultProps = defaultProps;

export default InputChat;
