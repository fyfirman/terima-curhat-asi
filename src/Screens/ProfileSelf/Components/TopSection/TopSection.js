import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  userGroup: PropTypes.string.isRequired,
  photo: PropTypes.string
};

const defaultProps = {
  photo: null
};

const TopSection = (props) => {
  const { name, photo, userGroup, phoneNumber } = props;

  return (
    <View style={styles.topSection}>
      <Avatar name={name} photo={photo} size={64} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.secondary}>{userGroup}</Text>
        <Text style={styles.secondary}>{phoneNumber}</Text>
      </View>
    </View>
  );
};

TopSection.propTypes = propTypes;
TopSection.defaultProps = defaultProps;

export default TopSection;
