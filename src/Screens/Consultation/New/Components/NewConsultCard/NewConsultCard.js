import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import * as styles from './styles';
import { Button } from './Components';
import { getInitial } from '../../../../../Helper';

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

  const renderAvatar = () => {
    if (photo === null) {
      return (
        <Avatar.Text
          style={styles.ava}
          labelStyle={styles.labelStyle}
          label={getInitial(name)}
          size={60}
        />
      );
    }
    return (
      <Avatar.Image style={styles.ava} source={{ uri: photo }} size={60} />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.avaContainer}>
        {renderAvatar()}
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
