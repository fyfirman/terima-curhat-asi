import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { Button } from './Components';
import { Avatar } from '../../../../../Components';

const propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  onPress: PropTypes.func.isRequired
};

const defaultProps = {
  name: 'User tidak mempunyai nama',
  photo: null
};

const NewConsultCard = (props) => {
  const { name, photo, onPress } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.avaContainer}>
        <Avatar size={60} name={name} photo={photo} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.info}>
          Tekan pada foto profil untuk melihat profil
        </Text>
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
