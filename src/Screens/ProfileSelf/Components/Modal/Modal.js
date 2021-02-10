import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Modal } from 'react-native-paper';
import { Button } from '..';
import { TextInput } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

const defaultProps = {};

const CustomModal = (props) => {
  const { visible, onDismiss, onCancel, onSave } = props;

  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={styles.containerStyle}
    >
      <Text style={styles.header}>Nama</Text>
      <TextInput />
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
