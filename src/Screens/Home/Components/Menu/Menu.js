import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as styles from './styles';
import { Colors } from '../../../../Theme';

const propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const defaultProps = {};

const Menu = (props) => {
  const { iconName, title, onPress } = props;

  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Icon name={iconName} size={64} color={Colors.java} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
