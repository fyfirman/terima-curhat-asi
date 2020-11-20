/* eslint-disable no-console */
// Import module
import RNPusherPushNotifications from 'react-native-pusher-push-notifications';
import { PUSHER_BEAMS_INSTANCE_ID } from 'react-native-dotenv';

// Get your interest
const donutsInterest = 'debug-donuts';

// Initialize notifications
export default {
  init: () => {
    // Set your app key and register for push
    RNPusherPushNotifications.setInstanceId(PUSHER_BEAMS_INSTANCE_ID);
    console.log(
      `Set RNPusherPushNotifications instance id : ${PUSHER_BEAMS_INSTANCE_ID}`
    );

    // Init interests after registration
    RNPusherPushNotifications.on('registered', () => {
      console.log(
        `Pusher registered. Trying to subscribe ${donutsInterest}...`
      );
      subscribe(donutsInterest);
    });

    // Setup notification listeners
    RNPusherPushNotifications.on('notification', handleNotification);
  }
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
      console.log('Success');
    }
  );
};

// Unsubscribe from an interest
const unsubscribe = (interest) => {
  RNPusherPushNotifications.unsubscribe(
    interest,
    (statusCode, response) => {
      console.tron.logImportant(statusCode, response);
    },
    () => {
      console.tron.logImportant('Success');
    }
  );
};
