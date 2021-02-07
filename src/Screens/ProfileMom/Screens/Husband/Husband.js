import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { ProfileInfoItem } from '../../../../Components';
import * as styles from './styles';
import { StringHelper } from '../../../../Helper';

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Husband = (props) => {
  const { route } = props;
  const { husband } = route.params;

  return husband ? (
    <ScrollView>
      <ProfileInfoItem label="Relasi" info={husband.relation_type_text} />
      <ProfileInfoItem label="Nama" info={husband.name} />
      <ProfileInfoItem label="Tempat Lahir" info={husband.pob} />
      <ProfileInfoItem label="Tanggal Lahir" info={husband.dob} />
      <ProfileInfoItem
        label="Agama"
        info={StringHelper.toTitleCase(husband.religion || '')}
      />
      <ProfileInfoItem label="Pendidikan" info={husband.education_text} />
      <ProfileInfoItem
        label="Pekerjaan/Profesi"
        info={husband.occupation_name}
      />
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
