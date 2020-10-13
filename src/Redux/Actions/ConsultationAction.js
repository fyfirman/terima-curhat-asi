import { ConsultationConstant } from '../Constant';

const setConsultation = (consultation) => ({
  type: ConsultationConstant.FETCHED,
  payload: {
    consultation
  }
});

const setConsultationPost = (consultationId, consultationPost) => ({
  type: ConsultationConstant.POST_FETCHED,
  payload: {
    consultationId,
    consultationPost
  }
});

const updateConsultation = (consultations) => ({
  type: ConsultationConstant.UPDATED,
  payload: {
    consultations
  }
});

const ConsultationAction = {
  setConsultation,
  setConsultationPost,
  updateConsultation
};

export default ConsultationAction;
