import Pusher from 'pusher-js/react-native';
import {
  PUSHER_APP_CLUSTER,
  PUSHER_APP_KEY,
  PUSHER_AUTH_ENDPOINT
} from 'react-native-dotenv';

const create = (session) => {
  const options = {
    cluster: PUSHER_APP_CLUSTER,
    forceTLS: true,
    authEndpoint: PUSHER_AUTH_ENDPOINT,
    auth: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${session.tokenType} ${session.accessToken}`
      }
    }
  };

  Pusher.logToConsole = true;
  const PusherClient = new Pusher(PUSHER_APP_KEY, options);

  return PusherClient;
};

export default { create };
