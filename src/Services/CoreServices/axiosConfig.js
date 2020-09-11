import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

const instance = axios.create({
  baseURL: BASE_URL
});

instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
instance.interceptors.request.use(
  (config) => {
    console.log('Request was sent :', config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
