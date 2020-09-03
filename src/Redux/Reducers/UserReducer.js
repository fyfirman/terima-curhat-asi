import { UserConstant } from '../Constant';

const initialState = {};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserConstant.FETCHED:
      return payload;
    case UserConstant.PATCHED:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default UserReducer;
