export const actions = {
  FETCHED: 'users:fetched',
  PATCHED: 'users:patched',
  FLUSH: 'users:flush',
};

export default (state = {}, action) => {
  const {type, payload} = action;
  switch (type) {
    case actions.FETCHED:
      return payload;
    case actions.PATCHED:
      return {...state, ...payload};
    default:
      return state;
  }
};
