import Pusher from 'pusher-js/react-native';
import {
  PUSHER_APP_CLUSTER,
  PUSHER_APP_KEY,
  PUSHER_AUTH_ENDPOINT,
  PUSHER_APP_ID,
  PUSHER_LOG
} from 'react-native-dotenv';

const create = (session) => {
  const options = {
    appId: PUSHER_APP_ID,
    cluster: PUSHER_APP_CLUSTER,
    authEndpoint: PUSHER_AUTH_ENDPOINT,
    encrypted: true,
    auth: {
      headers: {
        Accept: 'application/json',
        Authorization: `${session.tokenType} ${session.accessToken}`
      }
    }
  };

  Pusher.logToConsole = PUSHER_LOG;
  const PusherClient = new Pusher(PUSHER_APP_KEY, options);

  return PusherClient;
};

export default { create };
