import { UserConstant } from '../Constant';

const setUser = (payload) => ({ type: UserConstant.FETCHED, payload });
const patched = (payload) => ({ type: UserConstant.PATCHED, payload });
const flushUser = () => ({ type: UserConstant.FLUSH, payload: {} });

const UserAction = {
  setUser,
  patched,
  flushUser
};

export default UserAction;
