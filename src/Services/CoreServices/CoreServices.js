import get from './Get';
import post from './Post';
import put from './Put';
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
const getMidwifes = () => get('api/midwifes', Config.withToken());
const getDoctorGeneral = () => get('api/doctor-general', Config.withToken());
const getDoctorSpecialist = () =>
  get('api/doctor-specialist', Config.withToken());

// Post
const postGenerateToken = (data) => post('auth/token', Config.withOauth(data));
const postAcceptConsultation = (id) =>
  post(`api/consultations/${id}/join`, null, Config.withToken());
const postRejectConsultation = (id) =>
  post(`api/consultations/${id}/leave`, null, Config.withToken());
const postStoreConsultationPost = (id, data) =>
  post(`api/consultations/${id}/consultation_posts`, data, Config.withToken());
const postInviteUserToConsultation = (id, userId) =>
  post(`api/consultations/${id}/invite/${userId}`, null, Config.withToken());

// Put
const putCloseConsulation = (id) =>
  put(`api/consultations/${id}/close`, null, Config.withToken());

// Delete

const CoreServices = {
  getProfile,
  getConsultations,
  getConsultationPost,
  getMidwifes,
  getDoctorGeneral,
  getDoctorSpecialist,
  postGenerateToken,
  postAcceptConsultation,
  postRejectConsultation,
  postStoreConsultationPost,
  postInviteUserToConsultation,
  putCloseConsulation
};

export default CoreServices;
