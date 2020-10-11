import { BASE_URL } from 'react-native-dotenv';

const getImages = (locator) => `${BASE_URL}/storage/${locator}`;

const UriHelper = {
  getImages
};

export default UriHelper;
