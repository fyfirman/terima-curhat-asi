import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  date: PropTypes.instanceOf(Date),
  string: PropTypes.string
};

const defaultProps = {
  date: new Date(),
  string: ''
};

const TimeSection = ({ date, string }) => {
  const addZero = (time) => {
    if (time < 9) return `0${time}`;
    return time;
  };

  return (
    <Text style={styles.time}>
      {string !== ''
        ? string
        : `${addZero(date.getHours())}:${addZero(date.getMinutes())}`}
    </Text>
  );
};

TimeSection.propTypes = propTypes;
TimeSection.defaultProps = defaultProps;

export default TimeSection;
