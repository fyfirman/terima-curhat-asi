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

const ConsultationAction = {
  setConsultation,
  setConsultationPost
};

export default ConsultationAction;
