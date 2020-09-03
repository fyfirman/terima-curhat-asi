import { SessionConstant } from '../Constant';

const grants = ({ AccessToken, RefreshToken, TokenType, ExpiresIn }) => ({
  type: SessionConstant.GRANTS,
  payload: {
    AccessToken,
    RefreshToken,
    TokenType,
    ExpiresIn
  }
});

const flush = () => ({ type: SessionConstant.FLUSH, payload: {} });

const SessionAction = {
  grants,
  flush
};

export default SessionAction;
