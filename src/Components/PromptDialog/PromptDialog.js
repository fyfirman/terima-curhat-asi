import React from 'react';
import PropTypes from 'prop-types';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import * as styles from './styles';
import { Colors } from '../../Theme';

const propTypes = {
  visible: PropTypes.bool.isRequired,
  onNoHandler: PropTypes.func.isRequired,
  onYesHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  yesLabel: PropTypes.string,
  noLabel: PropTypes.string,
  onDismiss: PropTypes.func
};

const defaultProps = {
  onDismiss: () => {},
  content: '',
  yesLabel: 'Ya',
  noLabel: 'Tidak'
};

const PromptDialog = (props) => {
  const {
    visible,
    onYesHandler,
    onNoHandler,
    onDismiss,
    title,
    content,
    yesLabel,
    noLabel
  } = props;

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onNoHandler} color={Colors.cranberry}>
            {noLabel}
          </Button>
          <Button onPress={onYesHandler} color={Colors.cranberry}>
            {yesLabel}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

PromptDialog.propTypes = propTypes;
PromptDialog.defaultProps = defaultProps;

export default PromptDialog;
