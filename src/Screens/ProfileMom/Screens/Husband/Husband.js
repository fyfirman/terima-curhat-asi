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
      <InfoItem label="Nama" info={husband.name} />
      <InfoItem label="Tempat Lahir" info={husband.pob} />
      <InfoItem label="Tanggal Lahir" info={husband.dob} />
      <InfoItem label="Agama" info={husband.religion} />
      <InfoItem label="Pendidikan" info={husband.education_text} />
      <InfoItem label="Pekerjaan/Profesi" info={husband.occupation_name} />
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
