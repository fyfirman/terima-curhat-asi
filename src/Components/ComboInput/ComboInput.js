import React, { useState } from 'react';
import { Modal, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  label: PropTypes.string,
  initialIndex: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  buttonTextStyle: PropTypes.objectOf(PropTypes.any),
  buttonStyle: PropTypes.objectOf(PropTypes.any)
};

const defaultProps = {
  label: null,
  initialIndex: null,
  items: {},
  onChange: () => {},
  disabled: false,
  buttonTextStyle: {},
  buttonStyle: {}
};

const ComboInput = (props) => {
  const {
    initialIndex,
    items,
    onChange,
    label,
    disabled,
    buttonTextStyle,
    buttonStyle
  } = props;

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const [optionVisible, setOptionVisible] = useState(false);

  const passToParent = (item = {}) => {
    if (undefined === onChange) {
      return;
    }
    onChange(item);
  };

  const renderOptions = () => {
    return items.map((item, index) => {
      const chosen = index === selectedIndex;

      return (
        <TouchableOpacity
          key={index}
          style={styles.optionItem(index, chosen)}
          onPress={() => {
            setSelectedIndex(index);
            setOptionVisible(false);
            passToParent(item);
          }}
        >
          <Text style={styles.optionText(chosen)}>{item.label}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <>
      <Modal animationType="fade" transparent visible={optionVisible}>
        <View
          onTouchEnd={() => {
            setOptionVisible(false);
          }}
          style={styles.modalContainer}
        >
          <View style={styles.optionModal}>
            <ScrollView style={styles.optionContainer}>
              {renderOptions()}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View>
        {label && <Text style={styles.labelText}>{label}</Text>}
        <TouchableOpacity
          style={{ ...styles.button, ...buttonStyle }}
          onPress={() => setOptionVisible(true)}
          disabled={disabled}
        >
          <Text style={{ ...styles.buttonText, ...buttonTextStyle }}>
            {items[selectedIndex] ? items[selectedIndex].label : 'Pilih satu'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

ComboInput.propTypes = propTypes;
ComboInput.defaultProps = defaultProps;

export default ComboInput;
