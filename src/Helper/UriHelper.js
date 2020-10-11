import { BASE_URL } from 'react-native-dotenv';

const getStorage = (locator) => `${BASE_URL}/storage/${locator}`;

const UriHelper = {
  getStorage
};

export default UriHelper;
