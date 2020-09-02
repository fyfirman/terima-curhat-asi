import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com'
});

instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
instance.interceptors.request.use(
  (config) => {
    // perform a task before the request is sent
    console.log('Request was sent :', config.data);

    return config;
  },
  (error) => {
    // handle the error
    return Promise.reject(error);
  }
);

export default instance;
