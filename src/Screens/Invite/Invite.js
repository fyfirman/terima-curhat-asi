import React, { useEffect, useState } from 'react';
import { View, FlatList, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserItem } from './Components';
import * as styles from './styles';
import { CoreServices } from '../../Services';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Invite = (props) => {
  const { navigation, user, route } = props;
  const { consultation } = route.params;

  const [medic, setMedic] = useState([]);

  useEffect(() => {
    getList()
      .then(
        (res) => {
          setMedic(res.payload);
        },
        (error) => {
          ToastAndroid.show(error.message, ToastAndroid.LONG);
        }
      )
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
  }, []);

  const getList = () => {
    switch (user.user_group.id) {
      case 'kdr':
        return CoreServices.getMidwifes();
      case 'bdn':
        return CoreServices.getConselor();
      case 'cons':
        return CoreServices.getDoctorGeneral();
      case 'du':
        return CoreServices.getDoctorSpecialist();
      default:
        return null;
    }
  };

  const handleInvite = (medicId) => {
    CoreServices.postInviteUserToConsultation(consultation.id, medicId)
      .then(
        () => {
          navigation.goBack();
          ToastAndroid.show('Undangan berhasil dikirim', ToastAndroid.LONG);
        },
        (error) => {
          console.error(error);
          navigation.goBack();
          ToastAndroid.show(
            'Gagal mengirimi undangan, undangan telah dikirim.',
            ToastAndroid.LONG
          );
        }
      )
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
  };

  const renderItem = ({ item }) => (
    <UserItem
      name={item.profile.name}
      domicile={item.profile.domicile}
      onPress={() => handleInvite(item.id)}
      photo={item.profile?.picture?.original}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={medic}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
      />
    </View>
  );
};

Invite.propTypes = propTypes;
Invite.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Invite);
