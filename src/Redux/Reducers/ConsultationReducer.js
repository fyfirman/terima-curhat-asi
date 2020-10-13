import { ConsultationConstant } from '../Constant';

const defaultState = [];

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ConsultationConstant.FETCHED:
      return payload;

    case ConsultationConstant.UPDATED: {
      const newConsulation = state.concat(payload);
      const filteredConsultation = newConsulation
        .slice()
        .reverse()
        .filter(
          (value, index, array) =>
            array.findIndex((consultation) => consultation.id === value.id) ===
            index
        )
        .reverse();

      return filteredConsultation;
    }

    case ConsultationConstant.POST_FETCHED: {
      const { consultationId, consultationPost } = payload;

      return state.map((consultation) =>
        consultation.id === consultationId
          ? {
              ...consultation,
              consultationPost
            }
          : consultation
      );
    }
    default:
      return state;
  }
};
