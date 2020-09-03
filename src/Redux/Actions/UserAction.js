import { UserConstant } from '../Constant';

const setUser = (payload) => ({ type: UserConstant.FETCHED, payload });
const patched = (payload) => ({ type: UserConstant.PATCHED, payload });
const flush = () => ({ type: UserConstant.FLUSH, payload: {} });

const UserAction = {
  setUser,
  patched,
  flush
};

export default UserAction;
