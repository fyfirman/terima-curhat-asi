import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import LoggerMiddleware from './Reducers/Middlewares/LoggerMiddleware';
import monitorReducerEnhancer from './Reducers/Enhancers/monitorReducerEnhancer';
import UserReducer from './Reducers/UserReducer';
import SessionReducer from './Reducers/SessionReducer';

const middleware = applyMiddleware(LoggerMiddleware, thunk);
const enhancer = compose(middleware, monitorReducerEnhancer);
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['session'],
};
const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
});
const store = createStore(
  persistReducer(persistConfig, rootReducer),
  undefined,
  enhancer,
);
export const persistor = persistStore(store);
export default store;
