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

      const oldConsulation = state.find(
        (consultation) => consultation.id === consultationId
      );

      const newConsulation = {
        ...oldConsulation,
        consultationPost
      };

      return [...state, ...newConsulation];
    }
    default:
      return state;
  }
};
