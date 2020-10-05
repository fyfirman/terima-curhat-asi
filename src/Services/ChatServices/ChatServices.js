import Pusher from 'pusher-js/react-native';
import {
  PUSHER_APP_ID,
  PUSHER_APP_CLUSTER,
  PUSHER_APP_KEY,
  PUSHER_AUTH_ENDPOINT
} from 'react-native-dotenv';

const ChatServices = () => {
  console.log('PUSHER_AUTH_ENDPOINT ', PUSHER_AUTH_ENDPOINT);

  const options = {
    appId: PUSHER_APP_ID,
    cluster: PUSHER_APP_CLUSTER,
    forceTLS: true,
    authEndpoint: PUSHER_AUTH_ENDPOINT,
    encrypted: true
  };

  Pusher.logToConsole = true;
  return new Pusher(PUSHER_APP_KEY, options);
};

export default ChatServices();
