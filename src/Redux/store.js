import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import LoggerMiddleware from './Middlewares/LoggerMiddleware';
import monitorReducer from './Enhancers/monitorReducer';
import rootReducer from './Reducers';

const middleware = applyMiddleware(LoggerMiddleware, thunk);
const enhancer = compose(middleware, monitorReducer);

const store = createStore(rootReducer, undefined, enhancer);

export const persistor = persistStore(store);
export default store;
