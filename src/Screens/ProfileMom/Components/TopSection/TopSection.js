import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import * as styles from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
};

const defaultProps = {};

const TopSection = (props) => {
  const { name, phoneNumber } = props;

  return (
    <View style={styles.topSection}>
      <Avatar.Image
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg'
        }}
        size={64}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>
    </View>
  );
};

TopSection.propTypes = propTypes;
TopSection.defaultProps = defaultProps;

export default TopSection;
