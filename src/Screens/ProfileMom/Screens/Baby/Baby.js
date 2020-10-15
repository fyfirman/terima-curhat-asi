import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { InfoItem } from '../../Components';
import * as styles from './styles';

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Baby = (props) => {
  const { route } = props;
  const { baby } = route.params;

  return baby ? (
    <ScrollView>
      <InfoItem label="Usia Kehamilan Saat Melahirkan" info="36 minggu" />
      <InfoItem label="Berat Badan Bayi" info="26 kg" />
      <InfoItem label="Panjang Badan Bayi" info="55 cm" />
      <InfoItem label="Diameter Kepala Bayi" info="20 cm" />
      <InfoItem label="Jenis Kelamin" info="Laki-laki" />
      <InfoItem label="IMD" info="Ya" />
      <InfoItem label="Peletakan 1 jam" info="Ya" />
      <InfoItem label="Asupan" info="ASI" />
    </ScrollView>
  ) : (
    <View style={styles.infoContainer}>
      <Text style={styles.emptyInfo}>Belum mengisi profil bayi</Text>
    </View>
  );
};

Baby.propTypes = propTypes;
Baby.defaultProps = defaultProps;

export default Baby;
