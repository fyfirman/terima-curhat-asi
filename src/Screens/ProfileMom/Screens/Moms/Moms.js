import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { ProfileInfoItem } from '../../../../Components';
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
      <ProfileInfoItem label="Nama" info={user.profile?.name ?? '-'} />
      {/* TODO: format date of birth */}
      <ProfileInfoItem
        label="Umur"
        info={user.profile?.age.toString() ?? '-'}
      />
      <ProfileInfoItem label="Tanggal Lahir" info={user.profile?.dob ?? '-'} />
      <ProfileInfoItem
        label="Agama"
        info={StringHelper.toTitleCase(user.profile?.religion || '')}
      />
      <ProfileInfoItem
        label="Golongan Darah"
        info={user.profile?.blood_type ?? '-'}
      />
      <ProfileInfoItem
        label="Status Pernikahan"
        info={user.profile?.marital_status_text}
      />
      <ProfileInfoItem
        label="Pendidikan"
        info={user.profile?.education_text ?? '-'}
      />
      <ProfileInfoItem
        label="Pekerjaan/Profesi"
        info={user.profile?.occupation?.name ?? '-'}
      />
      <ProfileInfoItem
        label="Alamat"
        info={user.profile?.full_address ?? '-'}
      />
      <ProfileInfoItem
        label="Tinggal Dengan"
        info={user.profile?.housemate_text ?? '-'}
      />
      <ProfileInfoItem
        label="Kepemilikan Rumah"
        info={user.profile?.house_ownership_text ?? '-'}
      />
    </ScrollView>
  );
};

Moms.propTypes = propTypes;
Moms.defaultProps = defaultProps;

export default Moms;
