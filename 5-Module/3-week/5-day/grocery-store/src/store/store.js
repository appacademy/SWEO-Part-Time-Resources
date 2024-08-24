import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import produceReducer from './produce';
import cartReducer from './cart';

const rootReducer = combineReducers({
  produce: produceReducer,
  cart: cartReducer,
});

let enhancer;
if (import.meta.env.MODE !== "production") {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
