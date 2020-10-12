import { BASE_URL } from 'react-native-dotenv';
import axios from './axiosConfig';
import { getFormData } from '../../Helper';

const put = (path, data, config) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .put(`${BASE_URL}/${path}`, data ? getFormData(data) : {}, {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(
        (result) => {
          resolve(result.data);
        },
        (err) => {
          reject(err);
        }
      );
  });

  return promise;
};

export default put;
