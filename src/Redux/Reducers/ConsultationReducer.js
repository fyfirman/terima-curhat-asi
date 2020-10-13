import { ConsultationConstant } from '../Constant';

const defaultState = [];

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ConsultationConstant.FETCHED:
      return payload;
    // TODO: test updaded reducer
    case ConsultationConstant.UPDATED:
      return [...state, ...payload];
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
