import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { InfoItem } from '../../Components';
import * as styles from './styles';

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Husband = (props) => {
  const { route } = props;
  const { husband } = route.params;

  return husband ? (
    <ScrollView>
      <InfoItem label="Nama" info="Ayi Muhammad Iqbal Nasuha" />
      <InfoItem label="Tempat Lahir" info="Majalengka" />
      <InfoItem label="Tanggal Lahir" info="10 Desember 1989" />
      <InfoItem label="Agama" info="Islam" />
      <InfoItem label="Pendidikan" info="SMA/SMK/MA" />
      <InfoItem label="Pekerjaan/Profesi" info="Karyawan Swasta" />
    </ScrollView>
  ) : (
    <View style={styles.infoContainer}>
      <Text style={styles.emptyInfo}>
        Belum mengisi profil anggota keluarga lain
      </Text>
    </View>
  );
};

Husband.propTypes = propTypes;
Husband.defaultProps = defaultProps;

export default Husband;
