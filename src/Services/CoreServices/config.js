import { CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv';

const withToken = async (config) => {
  // const token = await LocalStorage.getToken();
  // return {
  //   ...config,
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // };
};

const withOauth = (body) => ({
  ...body,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET
});

const Config = {
  withToken,
  withOauth
};

export default Config;
