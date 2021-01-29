import React from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { Button } from './Components';
import { Avatar } from '../../../../../Components';
import { CoreServices, PusherBeamsServices } from '../../../../../Services';
import BeamsInterest from '../../../../../Constant/BeamsInterest';

const propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  consultation: PropTypes.objectOf(PropTypes.any).isRequired,
  onPress: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {
  name: 'User tidak mempunyai nama',
  photo: null
};

const NewConsultCard = (props) => {
  const { name, photo, consultation, onPress, navigation } = props;

  const handleReject = () => {
    CoreServices.postRejectConsultation(consultation.id).then(
      (res) => {
        ToastAndroid.show(
          'Permintaan konsultasi telah ditolak',
          ToastAndroid.SHORT
        );
      },
      (error) => {
        console.error(error);
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      }
    );
  };

  const handleAccept = () => {
    CoreServices.postAcceptConsultation(consultation.id).then(
      (res) => {
        PusherBeamsServices.subscribe(
          BeamsInterest.CONSULTATION + consultation.id
        );
        ToastAndroid.show(
          'Permintaan konsultasi telah diterima',
          ToastAndroid.SHORT
        );
        navigation.navigate('Chat', { consultation });
      },
      (error) => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      }
    );
  };

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
          <Button title="Tolak" onPress={handleReject} secondary />
          <Button title="Terima" onPress={handleAccept} />
        </View>
      </View>
    </View>
  );
};

NewConsultCard.propTypes = propTypes;
NewConsultCard.defaultProps = defaultProps;

export default NewConsultCard;
