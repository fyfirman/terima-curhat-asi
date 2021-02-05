import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

const Time = ({ date }) => {
  const addZero = (time) => {
    if (time < 9) return `0${time}`;
    return time;
  };

  return (
    <Text style={styles.time}>
      {`${addZero(date.getHours())}:${addZero(date.getMinutes())}`}
    </Text>
  );
};

Time.propTypes = propTypes;

export default Time;
