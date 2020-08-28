import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { Button } from './Components';

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: 'User tidak mempunyai nama'
};

const NewConsultCard = (props) => {
  const { name } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.ava}
        source={require('../../../../../assets/images/logo.png')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Tolak" onPress={() => {}} secondary />
          <Button title="Terima" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

NewConsultCard.propTypes = propTypes;
NewConsultCard.defaultProps = defaultProps;

export default NewConsultCard;
