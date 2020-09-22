import get from './Get';
import post from './Post';
import Config from './Config';

// Get
const getProfile = () => get('api/profile', Config.withToken());
const getConsultations = (config) =>
  get('api/consultations', Config.withToken(config));

// Post
const postGenerateToken = (data) => post('auth/token', Config.withOauth(data));

// Put

// Delete

const CoreServices = {
  getProfile,
  getConsultations,
  postGenerateToken
};

export default CoreServices;
