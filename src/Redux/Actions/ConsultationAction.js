import { ConsultationConstant } from '../Constant';

const setConsultations = (consultation) => ({
  type: ConsultationConstant.FETCHED,
  payload: consultation
});

const setConsultationPost = (consultationId, consultationPost) => ({
  type: ConsultationConstant.POST_FETCHED,
  payload: {
    consultationId,
    consultationPost
  }
});

const updateConsultations = (consultations) => ({
  type: ConsultationConstant.UPDATED,
  payload: {
    consultations
  }
});

const ConsultationAction = {
  setConsultations,
  setConsultationPost,
  updateConsultations
};

export default ConsultationAction;
