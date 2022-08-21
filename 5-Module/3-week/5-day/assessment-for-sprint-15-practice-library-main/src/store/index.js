import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import data from '../data/initial-books.json'
import bookReducer from './book';
const logger = require("redux-logger").default;
const composeEnhancers = 
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const rootReducer = combineReducers({
    books : bookReducer,
})



export const configureStore = () => {
  return createStore(rootReducer, );
};

export default configureStore;