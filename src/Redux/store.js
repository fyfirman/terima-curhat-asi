import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { persistConfig } from './Config';
import LoggerMiddleware from './Middlewares/LoggerMiddleware';
import monitorReducer from './Enhancers/monitorReducer';
import rootReducer from './Reducers';

const middleware = applyMiddleware(LoggerMiddleware, thunk);
const enhancer = compose(middleware, monitorReducer);

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  undefined,
  enhancer
);

export const persistor = persistStore(store);
export default store;
