import React from 'react';
import PropTypes from 'prop-types';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { CoreServices } from '../../Services';
import { ProfileInfoItem } from '../../Components';
import { TopSection } from './Components';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ProfileSelf = ({ user }) => {
  const handleChangeAvatar = () => {
    showPicker(handleSubmitWithImage, () => {
      ToastAndroid.show(
        'Anda membatalkan ganti foto profile',
        ToastAndroid.SHORT
      );
    });
  };

  const showPicker = (success, abort) => {
    const options = {
      title: 'Pilih foto',
      takePhotoButtonTitle: 'Buka kamera',
      chooseFromLibraryButtonTitle: 'Pilih dari galeri',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.error) {
        ToastAndroid.show(response.error, ToastAndroid.LONG);
      } else if (response.didCancel) {
        abort();
      } else {
        success(response);
      }
    });
  };

  const handleSubmitWithImage = (imageData) => {
    const body = {
      mime_type: imageData.type,
      picture: {
        uri: imageData.uri,
        type: imageData.type,
        name: imageData.fileName
      }
    };

    CoreServices.postChangeProfilePicture(body).then(
      (res) => {
        // TODO: fix this after backend fixed
        ToastAndroid.show(`Berhasil mengganti foto profile`, ToastAndroid.LONG);
        console.log(res);
      },
      (error) => {
        ToastAndroid.show(`Error : ${error.message}`, ToastAndroid.LONG);
        console.error(error);
      }
    );
  };

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
