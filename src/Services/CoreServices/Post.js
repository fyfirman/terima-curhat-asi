import { BASE_URL } from 'react-native-dotenv';
import axios from './axiosConfig';
import { getFormData } from '../../Helper';

const post = (path, data, config) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(
        `${BASE_URL}/${path}`,
        data ? getFormData(data) : {},
        config
          ? {
              ...config,
              headers: {
                ...config.headers,
                'Content-Type': 'multipart/form-data'
              }
            }
          : null
      )
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

export default post;
