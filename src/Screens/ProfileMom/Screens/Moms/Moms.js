import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { InfoItem } from '../../Components';
import { StringHelper } from '../../../../Helper';

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Moms = (props) => {
  const { route } = props;
  const { user } = route.params;

  return (
    <ScrollView>
      <InfoItem label="Nama" info={user.profile.name} />
      {/* TODO: format date of birth */}
      <InfoItem label="Umur" info={user.profile.age.toString()} />
      <InfoItem label="Tanggal Lahir" info={user.profile.dob} />
      <InfoItem
        label="Agama"
        info={StringHelper.toTitleCase(user.profile.religion)}
      />
      <InfoItem label="Golongan Darah" info={user.profile.blood_type} />
      <InfoItem
        label="Status Pernikahan"
        info={user.profile.marital_status_text}
      />
      <InfoItem label="Pendidikan" info={user.profile.education_text} />
      <InfoItem label="Pekerjaan/Profesi" info={user.profile.occupation.name} />
      <InfoItem label="Alamat" info={user.profile.full_address} />
      <InfoItem label="Tinggal Dengan" info={user.profile.housemate_text} />
      <InfoItem
        label="Kepemilikan Rumah"
        info={user.profile.house_ownership_text}
      />
    </ScrollView>
  );
};

Moms.propTypes = propTypes;
Moms.defaultProps = defaultProps;

export default Moms;
