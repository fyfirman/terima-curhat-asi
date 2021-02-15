/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as styles from './styles';
import { Colors } from '../../../../Theme';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

const defaultProps = {};

const FloatingInfo = (props) => {
  const { data } = props;

  const [showInfo, setShowInfo] = useState(false);

  const renderItem = (key, label, info) => (
    <View key={key}>
      <Text>{label}</Text>
      <Text>{info}</Text>
    </View>
  );

  const renderInfo = () => {
    return data.map((element, index) => {
      return renderItem(index, element.label, element.info);
    });
  };

  return (
    <View style={styles.infoContainer}>
      {showInfo && renderInfo()}
      <TouchableOpacity
        style={styles.info}
        onPress={() => setShowInfo(!showInfo)}
      >
        <Text style={styles.infoText}>Informasi konsultasi</Text>
        <Icon
          name={showInfo ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={Colors.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

FloatingInfo.propTypes = propTypes;
FloatingInfo.defaultProps = defaultProps;

export default FloatingInfo;
