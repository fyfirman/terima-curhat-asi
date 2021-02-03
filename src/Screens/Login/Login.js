import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid
} from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SessionAction, UserAction } from '../../Redux/Actions';

// Services
import { CoreServices } from '../../Services';

// UI
import { HeaderLogin } from '../../assets/svg';
import { TextInput, ComboInput, Button } from '../../Components';
import * as styles from './styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  setUser: PropTypes.func.isRequired,
  setSession: PropTypes.func.isRequired
};

const defaultProps = {};

const Login = (props) => {
  const { navigation, setUser, setSession } = props;

  const [formState, setFormState] = useState({
    phoneNumber: '',
    pin: '',
    role: ''
  });

  const isValid = () =>
    !(
      formState.phoneNumber === '' ||
      formState.pin === '' ||
      formState.role === ''
    );

  const { keyboardShown } = useKeyboard();

  const submit = () => {
    const body = {
      username: `${formState.role}:${formState.phoneNumber}`,
      grant_type: 'password',
      password: formState.pin
    };

    CoreServices.postGenerateToken(body)
      .then(
        (res) => {
          ToastAndroid.show('Login Berhasil', ToastAndroid.SHORT);
          setSession({
            accessToken: res.access_token,
            expiresIn: res.expires_in,
            tokenType: res.token_type,
            refreshToken: res.refresh_token
          });
          setUser({ isLoggedIn: true });

          navigation.navigate('MenuDrawer');
        },
        (error) => {
          if (error.response === null) {
            throw error;
          } else {
            ToastAndroid.show(
              'Nomor HP atau PIN tidak cocok',
              ToastAndroid.SHORT
            );
            console.error(error.response);
          }
        }
      )
      .catch((error) => {
        ToastAndroid.show('Tidak terkoneksi dengan server', ToastAndroid.SHORT);
        console.error(error);
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
    >
      <View style={styles.inner}>
        <View style={styles.headerContainer}>
          <HeaderLogin
            width="100%"
            height="100%"
            style={styles.headerBackground}
          />
          <View style={styles.headerContent}>
            <Image
              style={styles.logo(keyboardShown)}
              source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.title}>
              <Text style={styles.titleWhite}>Curhat</Text>
              <Text style={styles.titlePink}>ASI</Text>
            </Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Nomor HP"
            keyboardType="phone-pad"
            placeholder="Masukkan nomor"
            onChangeText={(value) => {
              setFormState({ ...formState, phoneNumber: value });
            }}
            numberOfLines={1}
          />
          <TextInput
            label="PIN"
            keyboardType="number-pad"
            placeholder="Masukkan 6 digit nomor rahasia"
            secureTextEntry
            onChangeText={(value) => {
              setFormState({ ...formState, pin: value });
            }}
            numberOfLines={1}
          />
          <ComboInput
            label="Sebagai"
            onChange={(node) => {
              const { value } = node;
              setFormState({ ...formState, role: value });
            }}
            items={[
              { value: 'kdr', label: 'Kader' },
              { value: 'bdn', label: 'Bidan' },
              { value: 'du', label: 'Dokter Umum' },
              { value: 'dsp', label: 'Dokter Spesialis/Ahli' }
            ]}
          />
          <View style={styles.buttonLogin}>
            <Button title="Masuk" onPress={submit} disabled={!isValid()} />
          </View>
          <View style={styles.forgotTextContainer}>
            <Text style={styles.forgotPinText}>Anda lupa PIN? </Text>
            <TouchableOpacity
              style={styles.touchHereContainer}
              onPress={() => {
                navigation.navigate('ForgotPIN');
              }}
            >
              <Text style={styles.touchHereText}>Sentuh disini</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...SessionAction, ...UserAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
