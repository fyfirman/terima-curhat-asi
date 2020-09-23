import get from './Get';
import post from './Post';
import Config from './Config';

// Get
const getProfile = () => get('api/profile', Config.withToken());
const getConsultations = (config) =>
  get('api/consultations', Config.withToken(config));
const getConsultationPost = (id) =>
  get(
    `api/consultations/${id}/consultation_posts?sortBy=desc`,
    Config.withToken()
  );

// Post
const postGenerateToken = (data) => post('auth/token', Config.withOauth(data));

// Put

// Delete

const CoreServices = {
  getProfile,
  getConsultations,
  getConsultationPost,
  postGenerateToken
};

export default CoreServices;
