import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { RadioButton } from 'react-native-paper';
import { Colors } from '../../../../Theme';
import * as styles from './styles';

const propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

const defaultProps = {
  label: ''
};

const CustomRadioButton = (props) => {
  const { onPress, label, value, status } = props;

  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <RadioButton
        value={value}
        status={status}
        onPress={onPress}
        color={Colors.persianPink}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

CustomRadioButton.propTypes = propTypes;
CustomRadioButton.defaultProps = defaultProps;

export default CustomRadioButton;
