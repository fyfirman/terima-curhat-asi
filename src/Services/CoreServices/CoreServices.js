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
const postAcceptConsultation = (id) =>
  post(`api/consultations/${id}/join`, null, Config.withToken());
const postRejectConsultation = (id) =>
  post(`api/consultations/${id}/leave`, null, Config.withToken());
const postStoreConsultationPost = (id, data) =>
  post(`api/consultations/${id}/consultation_posts`, data, Config.withToken());

// Put

// Delete

const CoreServices = {
  getProfile,
  getConsultations,
  getConsultationPost,
  postGenerateToken,
  postAcceptConsultation,
  postRejectConsultation,
  postStoreConsultationPost
};

export default CoreServices;
