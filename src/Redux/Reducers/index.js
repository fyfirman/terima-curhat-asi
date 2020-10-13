import { combineReducers } from 'redux';
import SessionReducer from './SessionReducer';
import UserReducer from './UserReducer';
import ConsultationReducer from './ConsultationReducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  consultation: ConsultationReducer
});

export default rootReducer;
