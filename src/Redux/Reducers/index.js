import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer
});

export default rootReducer;
