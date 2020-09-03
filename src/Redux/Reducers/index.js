import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { persistConfig } from '../Config';
import SessionReducer from './SessionReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: persistReducer(persistConfig, UserReducer)
});

export default rootReducer;
