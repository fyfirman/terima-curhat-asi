import { SessionConstant } from '../Constant';

const setSession = ({ AccessToken, RefreshToken, TokenType, ExpiresIn }) => ({
  type: SessionConstant.GRANTS,
  payload: {
    AccessToken,
    RefreshToken,
    TokenType,
    ExpiresIn
  }
});

const flushSession = () => ({ type: SessionConstant.FLUSH, payload: {} });

const SessionAction = {
  setSession,
  flushSession
};

export default SessionAction;
