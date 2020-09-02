import post from './Post';
import Config from './Config';

// Get

// Post
const postGenerateToken = (data) => post('auth/token', Config.withOauth(data));

// Put

// Delete

const CoreServices = {
  postGenerateToken
};

export default CoreServices;
