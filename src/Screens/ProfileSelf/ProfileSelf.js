import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastAndroid } from 'react-native';
import { Portal, Text } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { bindActionCreators } from 'redux';
import { CoreServices } from '../../Services';
import { UserAction } from '../../Redux/Actions';
import { ComboInput, ProfileInfoItem, TextInput } from '../../Components';
import {
  TopSection,
  Modal,
  RadioButton,
  DomicileComboInput
} from './Components';
import * as styles from './styles';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  setUser: PropTypes.func.isRequired
};

const defaultProps = {};

const ProfileSelf = ({ user, setUser }) => {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(null);
  const [name, setName] = useState(user?.profile?.name);
  const [pob, setPob] = useState(user?.profile?.pob);
  const [dob, setDob] = useState(new Date(user?.profile?.dob));
  const [gender, setGender] = useState(user?.profile?.gender);
  const [address, setAddress] = useState(user?.profile?.address);
  const [province, setProvince] = useState(
    user.profile?.village?.sub_district?.district?.province
  );
  const [provinceItems, setProvinceItems] = useState([]);
  const [district, setDistrict] = useState(
    user.profile?.village?.sub_district?.district
  );
  const [districtItems, setDistrictItems] = useState([]);
  const [subDisctric, setSubDistrict] = useState(
    user.profile?.village?.sub_district
  );
  const [subDistrictItems, setSubDistrictItems] = useState([]);
  const [village, setVillage] = useState(user.profile?.village);
  const [villageItems, setVillageItems] = useState([]);

  const [step, setStep] = useState(0);

  useEffect(() => {
    CoreServices.getProvinces().then((res) => {
      setProvinceItems(res);
    });
  }, []);

  useEffect(() => {
    CoreServices.getDistricts(province.id).then((res) => {
      setDistrictItems(res);
    });
  }, [province]);

  useEffect(() => {
    CoreServices.getSubDistricts(district.id).then((res) => {
      setSubDistrictItems(res);
    });
  }, [district]);

  useEffect(() => {
    CoreServices.getVillages(subDisctric.id).then((res) => {
      setVillageItems(res);
    });
  }, [subDisctric]);

  const showModal = (type) => {
    setModal(type);
    setVisible(true);
  };

  const hideModal = () => setVisible(false);

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
      name,
      pob,
      dob: `${dob.getFullYear()}-${
        dob.getMonth() < 9 ? `0${dob.getMonth() + 1}` : dob.getMonth() + 1
      }-${dob.getDate()}`,
      gender,
      address,
      province_id: province?.id,
      district_id: district?.id,
      sub_district_id: subDisctric?.id,
      village_id: village?.id
    };

    CoreServices.postUpdateProfile(body).then(
      () => {
        refreshUser();
        hideModal();
        ToastAndroid.show('Berhasil mengupdate profil', ToastAndroid.LONG);
      },
      (error) => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
        console.error(error);
      }
    );
  };

  const renderModal = () => {
    switch (modal) {
      case 'name':
        return (
          <>
            <Text style={styles.header}>Nama</Text>
            <TextInput onChangeText={(text) => setName(text)} value={name} />
          </>
        );
      case 'birth':
        return (
          <>
            <Text style={styles.header}>Tempat Lahir</Text>
            <TextInput onChangeText={(text) => setPob(text)} value={pob} />
            <Text style={styles.header}>Tanggal Lahir</Text>
            <DatePicker
              date={dob}
              onDateChange={setDob}
              androidVariant="nativeAndroid"
              mode="date"
              maximumDate={new Date('2000-12-31')}
            />
          </>
        );
      case 'gender':
        return (
          <>
            <Text style={styles.header}>Jenis Kelamin</Text>
            <RadioButton
              label="Perempuan"
              onPress={() => {
                setGender('female');
              }}
              status={gender === 'female' ? 'checked' : 'unchecked'}
              value="female"
            />
            <RadioButton
              label="Laki-laki"
              onPress={() => {
                setGender('male');
              }}
              status={gender === 'male' ? 'checked' : 'unchecked'}
              value="male"
            />
          </>
        );
      case 'address':
        return (
          <>
            <Text style={styles.header}>Alamat</Text>
            <TextInput
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
          </>
        );
      case 'domicile':
        return (
          <>
            <DomicileComboInput
              items={provinceItems}
              label="Provinsi"
              onChange={(newProvince) => {
                setStep(1);
                setProvince(newProvince);
              }}
            />
            <DomicileComboInput
              items={districtItems}
              label="Kota/Kabupaten"
              onChange={(newDistrict) => {
                setStep(2);
                setDistrict(newDistrict);
              }}
              disabled={step < 1}
            />
            <DomicileComboInput
              items={subDistrictItems}
              label="Kelurahan"
              onChange={(newSubDistrict) => {
                setStep(3);
                setSubDistrict(newSubDistrict);
              }}
              disabled={step < 2}
            />
            <DomicileComboInput
              items={villageItems}
              label="Kecamatan"
              onChange={(newVillage) => {
                setStep(4);
                setVillage(newVillage);
              }}
              disabled={step < 3}
            />
          </>
        );
      default:
        return (
          <>
            <Text style={styles.header}>Wrong choice</Text>
          </>
        );
    }
  };

  return (
    <>
      <Portal>
        <Modal
          onDismiss={hideModal}
          onCancel={hideModal}
          visible={visible}
          onSave={handleEdit}
        >
          {renderModal()}
        </Modal>
      </Portal>
      <TopSection
        name={user.profile?.name}
        phoneNumber={user.username}
        userGroup={user.user_group.name}
        onPressPhoto={handleChangeAvatar}
        onPressEditButton={() => showModal('name')}
        photo={user.profile?.picture?.original}
      />

      <ProfileInfoItem
        label="Tempat, Tanggal Lahir"
        info={`${user?.profile?.pob}, ${user?.profile?.dob}`}
        onPressEditButton={() => showModal('birth')}
        editable
      />
      <ProfileInfoItem label="Umur" info={user?.profile?.age} />
      <ProfileInfoItem
        label="Jenis Kelamin"
        info={user?.profile?.gender === 'female' ? 'Perempuan' : 'Laki-Laki'}
        onPressEditButton={() => showModal('gender')}
        editable
      />
      <ProfileInfoItem
        label="Alamat"
        info={user?.profile?.address ?? '-'}
        onPressEditButton={() => showModal('address')}
        editable
      />
      <ProfileInfoItem
        label="Domisili"
        info={`${user?.profile?.domicile}, ${user.profile?.village?.sub_district?.district?.province?.name}`}
        onPressEditButton={() => {
          setStep(0);
          showModal('domicile');
        }}
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
