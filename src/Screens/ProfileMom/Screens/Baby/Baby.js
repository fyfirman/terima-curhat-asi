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

  const getFeeds = () => {
    switch (baby.feeds) {
      case 'breastfeed':
        return 'ASI';
      case 'mixed':
        return 'Campuran';
      case 'formula':
        return 'Susu Formula';
      default:
        return '-';
    }
  };

  return baby ? (
    <ScrollView>
      <InfoItem
        label="Usia Kehamilan Saat Melahirkan"
        info={`${baby.pregnancy_weeks} minggu`}
      />
      <InfoItem label="Berat Badan Bayi" info={`${baby.weight} kg`} />
      <InfoItem label="Panjang Badan Bayi" info={`${baby.height} cm`} />
      <InfoItem label="Diameter Kepala Bayi" info={`${baby.diameter} cm`} />
      <InfoItem
        label="Jenis Kelamin"
        info={baby.gender === 'male' ? 'Laki-laki' : 'Perempuan'}
      />
      <InfoItem label="IMD" info={baby.imd ? 'Ya' : 'Tidak'} />
      <InfoItem
        label="Peletakan 1 jam"
        info={baby.one_hour_init ? 'Ya' : 'Tidak'}
      />
      <InfoItem label="Asupan" info={getFeeds()} />
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
