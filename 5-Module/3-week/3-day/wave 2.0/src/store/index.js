import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import songReducer from './songs';
import testReducer from './test';

const logger = require("redux-logger").default;

const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const rootReducer = combineReducers(({
	songs: songReducer,
	test: testReducer
}));

export const configureStore = (prevState) => {
  return createStore(rootReducer, prevState, enhancer);
};

export default configureStore;
