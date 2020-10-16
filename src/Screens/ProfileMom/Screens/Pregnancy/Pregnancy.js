import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { InfoItem } from '../../Components';
import * as styles from './styles';

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Pregnancy = (props) => {
  const { route } = props;
  const { pregnancy } = route.params;

  return pregnancy ? (
    <ScrollView>
      <InfoItem
        label="Tinggi Badan Sebelum Hamil"
        info={`${pregnancy.height_before} cm`}
      />
      <InfoItem
        label="Tinggi Badan Setelah Hamil"
        info={`${pregnancy.height_during} cm`}
      />
      <InfoItem
        label="Berat Badan Sebelum Hamil"
        info={`${pregnancy.weight_before} kg`}
      />
      <InfoItem
        label="Berat Badan Setelah Hamil"
        info={`${pregnancy.weight_during} kg`}
      />
      <InfoItem
        label="Pernah Keguguran"
        info={pregnancy.abortus_experienced ? 'Ya' : 'Tidak'}
      />
      <InfoItem label="Kehamilan ke-" info={pregnancy.pregnancy_num} />
      <InfoItem
        label="Penyakit/Keluhan Saat Hamil"
        info={pregnancy.pregnancy_complaints}
      />
    </ScrollView>
  ) : (
    <View style={styles.infoContainer}>
      <Text style={styles.emptyInfo}>Belum mengisi profil kehamilan</Text>
    </View>
  );
};

Pregnancy.propTypes = propTypes;
Pregnancy.defaultProps = defaultProps;

export default Pregnancy;
