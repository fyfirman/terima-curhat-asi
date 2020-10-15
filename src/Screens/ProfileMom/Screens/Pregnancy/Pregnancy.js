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
      <InfoItem label="Tinggi Badan Sebelum Hamil" info="150 cm" />
      <InfoItem label="Tinggi Badan Setelah Hamil" info="148 cm" />
      <InfoItem label="Berat Badan Sebelum Hamil" info="54 kg" />
      <InfoItem label="Berat Badan Setelah Hamil" info="60 kg" />
      <InfoItem label="Kehamilan ke-" info="1" />
      <InfoItem
        label="Penyakit/Keluhan Saat Hamil"
        info={'Tidak keluar ASI\nNyeri ketika BAB'}
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
