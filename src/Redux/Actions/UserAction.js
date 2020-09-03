import { UserConstant } from '../Config';

const fetched = (payload) => ({ type: UserConstant.FETCHED, payload });
const patched = (payload) => ({ type: UserConstant.PATCHED, payload });
const flush = () => ({ type: UserConstant.FLUSH, payload: {} });

const UserAction = {
  fetched,
  patched,
  flush
};

export default UserAction;
