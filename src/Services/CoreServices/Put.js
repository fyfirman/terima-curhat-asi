import { BASE_URL } from 'react-native-dotenv';
import axios from './axiosConfig';

const put = (path, data, config) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${BASE_URL}/${path}`, data, config).then(
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
