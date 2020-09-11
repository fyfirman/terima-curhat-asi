import { BASE_URL } from 'react-native-dotenv';
import axios from './axiosConfig';

const drop = (path, config) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${BASE_URL}/${path}`, config).then(
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

export default drop;
