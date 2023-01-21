// createStore
// - rootReducer, preloadedState, enhancer
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
})

const logger = require("redux-logger").default;
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

export const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;