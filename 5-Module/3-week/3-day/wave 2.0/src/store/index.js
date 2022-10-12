import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import userReducer from './user';
import groupsReducer from './groups';

const logger = require("redux-logger").default;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const rootReducer = combineReducers(({
	user: userReducer,
	groups: groupsReducer
}));

export const configureStore = (prevState) => {
  return createStore(rootReducer, prevState, enhancer);
};

export default configureStore;
