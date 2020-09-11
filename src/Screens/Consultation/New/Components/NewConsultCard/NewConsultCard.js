import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
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
      <TouchableOpacity onPress={() => {}} style={styles.avaContainer}>
        <Avatar.Image
          style={styles.ava}
          source={{
            uri: `https://api.adorable.io/avatars/${Math.random() * 5000}`
          }}
          size={60}
        />
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
