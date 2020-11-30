/* eslint-disable no-console */
// Import module
import RNPusherPushNotifications from 'react-native-pusher-push-notifications';
import { PUSHER_BEAMS_INSTANCE_ID } from 'react-native-dotenv';
import BeamsInterest from '../../Constant/BeamsInterest';
import CoreServices from '../CoreServices';

const init = (interest = 'debug-donuts') => {
  // Set your app key and register for push
  RNPusherPushNotifications.setInstanceId(PUSHER_BEAMS_INSTANCE_ID);
  console.log(
    `Set RNPusherPushNotifications instance id : ${PUSHER_BEAMS_INSTANCE_ID}`
  );

  // Init interests after registration
  RNPusherPushNotifications.on('registered', () => {
    console.log('Successfully registered');
    // Debugging
    // console.log(`Pusher registered. Trying to subscribe ${interest}...`);
    // subscribe(interest);
  });

  // Setup notification listeners
  RNPusherPushNotifications.on('notification', handleNotification);
};

// Unsubscribe from an interest
const unsubscribe = (interest) => {
  RNPusherPushNotifications.unsubscribe(
    interest,
    (statusCode, response) => {
      console.error(statusCode, response);
    },
    () => {
      console.log(`Successfully unsubscribe to ${interest}`);
    }
  );
};

// Handle notifications received
const handleNotification = (notification) => {
  console.log(notification);
};

// Subscribe to an interest
const subscribe = (interest) => {
  // Note that only Android devices will respond to success/error callbacks
  RNPusherPushNotifications.subscribe(
    interest,
    (statusCode, response) => {
      console.error(statusCode, response);
    },
    () => {
      console.log(`Successfully subscribe to ${interest}`);
    }
  );
};

// Subscribe all chat interest
const subscribeAllChat = () => {
  CoreServices.getConsultations({ params: { type: 'ongoing' } }).then(
    (res) => {
      res.payload.data.forEach((consultation) => {
        subscribe(BeamsInterest.CONSULTATION + consultation.id);
      });
    },
    (error) => {
      console.error(error);
    }
  );
};

// Unsubscribe from an interest
const unsubscribeAll = () => {
  console.log('Trying to unsubscribe all');
  RNPusherPushNotifications.getSubscriptions(
    (subs) => {
      subs.forEach(unsubscribe);
    },
    () => {
      console.log('Error');
    }
  );
};

// Initialize notifications
export default {
  init,
  subscribe,
  subscribeAllChat,
  unsubscribe,
  unsubscribeAll
};
