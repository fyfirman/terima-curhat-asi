import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastAndroid, View } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { bindActionCreators } from 'redux';
import { CoreServices } from '../../Services';
import { UserAction } from '../../Redux/Actions';
import { ProfileInfoItem, TextInput } from '../../Components';
import { TopSection, Button } from './Components';
import * as styles from './styles';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  setUser: PropTypes.func.isRequired
};

const defaultProps = {};

const ProfileSelf = ({ user, setUser }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 4
  };

  const handleChangeAvatar = () => {
    showPicker(sendImageToServer, () => {
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

  const sendImageToServer = (imageData) => {
    const body = {
      picture: {
        uri: imageData.uri,
        type: imageData.type,
        name: imageData.fileName
      }
    };

    CoreServices.postChangeProfilePicture(body).then(
      () => {
        refreshUser();
        ToastAndroid.show(`Berhasil mengganti foto profile`, ToastAndroid.LONG);
      },
      (error) => {
        ToastAndroid.show(`Error : ${error.message}`, ToastAndroid.LONG);
        console.error(error);
      }
    );
  };

  const refreshUser = () => {
    CoreServices.getProfile()
      .then(
        (res) => {
          console.log(res.payload);
          setUser(res.payload);
        },
        (error) => {
          if (error.response === null) {
            throw error;
          }
        }
      )
      .catch((error) => {
        ToastAndroid.show('Tidak terkoneksi dengan server', ToastAndroid.SHORT);
        console.error(error);
      });
  };

  const handleEdit = () => {
    const body = {
      name: user.profile?.name,
      pob: user?.profile?.pob,
      dob: user?.profile?.dob,
      gender: user?.profile?.gender,
      address: user?.profile?.address,
      province_id: user.profile?.village?.sub_district?.district?.province?.id,
      district_id: user.profile?.village?.sub_district?.district?.id,
      sub_district_id: user.profile?.village?.sub_district?.id,
      village_id: user.profile?.village?.id
    };
    showModal();

    // CoreServices.postUpdateProfile(body).then(
    //   (res) => {
    //     console.log(res.message);
    //     refreshUser();
    //   },
    //   (error) => {
    //     ToastAndroid.show(error.message, ToastAndroid.SHORT);
    //     console.error(error);
    //   }
    // );
  };

  const renderInputName = () => {
    return <TextInput />;
  };

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={styles.header}>Nama</Text>
          {renderInputName()}
          <View style={styles.buttonModalContainer}>
            <Button
              title="Batalkan"
              onPress={() => {
                console.log('tes');
              }}
            />
            <Button
              title="Simpan"
              onPress={() => {
                console.log('tes');
              }}
            />
          </View>
        </Modal>
      </Portal>
      <TopSection
        name={user.profile?.name}
        phoneNumber={user.username}
        userGroup={user.user_group.name}
        onPressPhoto={handleChangeAvatar}
        onPressEditButton={handleEdit}
        photo={user.profile?.picture?.original}
      />

      <ProfileInfoItem
        label="Tempat, Tanggal Lahir"
        info={`${user?.profile?.pob}, ${user?.profile?.dob}`}
        onPressEditButton={handleEdit}
        editable
      />
      <ProfileInfoItem label="Umur" info={user?.profile?.age} />
      <ProfileInfoItem
        label="Jenis Kelamin"
        info={user?.profile?.gender === 'female' ? 'Perempuan' : 'Laki-Laki'}
        onPressEditButton={handleEdit}
        editable
      />
      <ProfileInfoItem
        label="Alamat"
        info={user?.profile?.address ?? '-'}
        onPressEditButton={handleEdit}
        editable
      />
      <ProfileInfoItem
        label="Domisili"
        info={user?.profile?.domicile ?? '-'}
        onPressEditButton={handleEdit}
        editable
      />
      <ProfileInfoItem
        label="Provinsi"
        info={
          user.profile?.village?.sub_district?.district?.province?.name ?? '-'
        }
        onPressEditButton={handleEdit}
        editable
      />
    </>
  );
};

ProfileSelf.propTypes = propTypes;
ProfileSelf.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(UserAction, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSelf);
