import { actions } from '../SessionReducer';

export const grants = ({
  access_token,
  refresh_token,
  token_type,
  expires_in
}) => ({
  type: actions.GRANTS,
  payload: {
    access_token,
    refresh_token,
    token_type,
    expires_in
  }
});
export const flush = () => ({ type: actions.FLUSH, payload: {} });
