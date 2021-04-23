import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { FeedInfo, BirthProcessInfo } from '../../../../Constant';
import { ProfileInfoItem } from '../../../../Components';
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
      <ProfileInfoItem
        label="Tanggal Lahir Bayi (Usia)"
        info={baby.dob ? `${baby.dob} (${baby.age})` : '-'}
      />
      <ProfileInfoItem
        label="Usia Kehamilan Saat Melahirkan"
        info={`${baby.pregnancy_weeks} minggu`}
      />
      <ProfileInfoItem label="Berat Badan Bayi" info={`${baby.weight} kg`} />
      <ProfileInfoItem
        label="Panjang/Tinggi Badan Bayi"
        info={`${baby.height} cm`}
      />
      <ProfileInfoItem
        label="Diameter Lingkar Kepala Bayi"
        info={`${baby.diameter} cm`}
      />
      <ProfileInfoItem
        label="Jenis Kelamin"
        info={baby.gender === 'male' ? 'Laki-laki' : 'Perempuan'}
      />
      <ProfileInfoItem
        label="Cara Persalinan"
        info={BirthProcessInfo[baby.birth_process]}
      />
      <ProfileInfoItem
        label="IMD (Inisiasi Menyusui Dini)"
        info={baby.imd ? 'Ya' : 'Tidak'}
      />
      <ProfileInfoItem
        label="Lama waktu IMD"
        info={baby.one_hour_init ? 'Satu jam' : 'Dibawah satu jam'}
      />
      <ProfileInfoItem label="Asupan" info={FeedInfo[baby.feeds]} />
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
