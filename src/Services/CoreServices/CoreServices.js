import get from './Get';
import post from './Post';
import Config from './Config';

// Get
const getProfile = () => get('api/profile', Config.withToken());

// Post
const postGenerateToken = (data) => post('auth/token', Config.withOauth(data));

// Put

// Delete

const CoreServices = {
  getProfile,
  postGenerateToken
};

export default CoreServices;
