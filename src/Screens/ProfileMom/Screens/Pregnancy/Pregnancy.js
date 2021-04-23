import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { ProfileInfoItem } from '../../../../Components';
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
      <ProfileInfoItem
        label="Tinggi Badan"
        info={`${pregnancy.height_before} cm`}
      />
      <ProfileInfoItem
        label="Berat Badan Sebelum Hamil"
        info={`${pregnancy.weight_before} kg`}
      />
      <ProfileInfoItem
        label="Berat Badan Setelah Melahirkan"
        info={`${pregnancy.weight_during} kg`}
      />
      <ProfileInfoItem
        label="Pernah Keguguran"
        info={pregnancy.abortus_experienced ? 'Ya' : 'Tidak'}
      />
      <ProfileInfoItem
        label="Jumlah Riwayat Keguguran"
        info={pregnancy.abortus_num}
      />
      <ProfileInfoItem
        label="Jumlah Riwayat Kehamilan"
        info={pregnancy.pregnancy_num}
      />
      <ProfileInfoItem
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
