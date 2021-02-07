import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileInfoItem } from '../../Components';
import { TopSection } from './Components';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ProfileSelf = ({ user }) => {
  return (
    <>
      <TopSection
        name={user.profile?.name}
        phoneNumber={user.username}
        userGroup={user.user_group.name}
      />

      <ProfileInfoItem
        label="Tempat, Tanggal Lahir"
        info={`${user?.profile?.pob}, ${user?.profile?.dob}`}
      />
      <ProfileInfoItem label="Umur" info={user?.profile?.age} />
      <ProfileInfoItem
        label="Jenis Kelamin"
        info={user?.profile?.gender === 'female' ? 'Perempuan' : 'Laki-Laki'}
      />
      <ProfileInfoItem label="Alamat" info={user?.profile?.address ?? '-'} />
      <ProfileInfoItem label="Domisili" info={user?.profile?.domicile ?? '-'} />
      <ProfileInfoItem
        label="Provinsi"
        info={
          user?.profile?.village?.sub_district?.district?.province?.name ?? '-'
        }
      />
    </>
  );
};

ProfileSelf.propTypes = propTypes;
ProfileSelf.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(ProfileSelf);
