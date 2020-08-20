export const actions = {
  GRANTS: 'sessions:grants',
  FLUSH: 'sessions:flush'
};
const defaultState = {
  access_token: '',
  refresh_token: '',
  token_type: 'Bearer',
  expires_in: null
};
export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.FLUSH:
      return defaultState;
    case actions.GRANTS:
      return { ...defaultState, ...payload };
    default:
      return state;
  }
};
