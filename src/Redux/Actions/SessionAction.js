import { SessionConstant } from '../Constant';

const setSession = ({ accessToken, refreshToken, tokenType, expiresIn }) => ({
  type: SessionConstant.GRANTS,
  payload: {
    accessToken,
    refreshToken,
    tokenType,
    expiresIn
  }
});

const flushSession = () => ({ type: SessionConstant.FLUSH, payload: {} });

const SessionAction = {
  setSession,
  flushSession
};

export default SessionAction;
