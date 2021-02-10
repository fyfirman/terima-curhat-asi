import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Modal } from 'react-native-paper';
import { Button } from '..';
import * as styles from './styles';

const propTypes = {
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const defaultProps = {};

const CustomModal = (props) => {
  const { visible, onDismiss, onCancel, onSave, children } = props;

  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={styles.containerStyle}
    >
      {children}
      <View style={styles.buttonModalContainer}>
        <Button title="Batalkan" onPress={onCancel} />
        <Button title="Simpan" onPress={onSave} />
      </View>
    </Modal>
  );
};

CustomModal.propTypes = propTypes;
CustomModal.defaultProps = defaultProps;

export default CustomModal;
