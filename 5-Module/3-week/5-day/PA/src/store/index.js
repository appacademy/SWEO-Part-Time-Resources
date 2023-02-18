import { applyMiddleware, compose, createStore, combineReducers,} from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({books: booksReducer})

const logger = require("redux-logger").default;
const composeEnhancers = 
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

export const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;