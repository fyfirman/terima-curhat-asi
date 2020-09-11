import { CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv';
import store from '../../Redux/store';

const withToken = (config) => {
  const { session } = store.getState();

  return {
    ...config,
    headers: {
      Authorization: `${session.tokenType} ${session.accessToken}`
    }
  };
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
