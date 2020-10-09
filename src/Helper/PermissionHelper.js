import { reject } from 'lodash';
import { Platform, PermissionsAndroid } from 'react-native';

const checkPermissions = (permissions) =>
  permissions.map((permission) => PermissionsAndroid.check(permission));

const checkRecorder = () => {
  const permissions = [
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
  ];

  const promise = Promise.all(checkPermissions(permissions)).then(
    (result) => {
      return result.reduce((granted, permission) => granted && permission);
    },
    (error) => {
      reject(error);
    }
  );

  return promise;
};

const requestRecorder = async () => {
  if (Platform.OS === 'android') {
    try {
      const externalStorage = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permintaan Izin',
          message: 'Terima Curhat ASI meminta akses penyimpanan eksternal',
          buttonPositive: 'Terima'
        }
      );
      const recordAudio = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Permintaan Izin',
          message: 'Terima Curhat ASI meminta akses penyimpanan eksternal',
          buttonPositive: 'Terima'
        }
      );
      if (
        externalStorage !== PermissionsAndroid.RESULTS.GRANTED &&
        recordAudio !== PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Izin ditolak');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

const PermissionHelper = {
  requestRecorder,
  checkRecorder
};

export default PermissionHelper;
