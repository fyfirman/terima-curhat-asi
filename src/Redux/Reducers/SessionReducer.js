import { SessionConstant } from '../Constant';

const defaultState = {
  access_token: '',
  refresh_token: '',
  token_type: 'Bearer',
  expires_in: null
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SessionConstant.FLUSH:
      return defaultState;
    case SessionConstant.GRANTS:
      return { ...defaultState, ...payload };
    default:
      return state;
  }
};
