/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
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
    <View key={key} style={styles.infoItem}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );

  const renderInfo = () => {
    return data.map((element, index) => {
      return renderItem(index, element.label, element.info);
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.infoContainer(showInfo)}>
        {showInfo && renderInfo()}
      </View>
      <TouchableWithoutFeedback onPress={() => setShowInfo(!showInfo)}>
        <View style={styles.button(showInfo)}>
          <Text style={styles.buttonText}>
            {!showInfo ? 'Informasi konsultasi' : 'Sembunyikan'}
          </Text>
          <Icon
            name={showInfo ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={Colors.textPrimary}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

FloatingInfo.propTypes = propTypes;
FloatingInfo.defaultProps = defaultProps;

export default FloatingInfo;
