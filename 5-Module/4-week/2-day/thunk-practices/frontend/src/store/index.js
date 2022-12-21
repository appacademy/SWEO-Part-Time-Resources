import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import fruitReducer from './fruitReducer';
import articleReducer from './articleReducer';


const rootReducer = combineReducers({
  fruitState: fruitReducer,
  articleState: articleReducer
});


let enhancer;

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) : compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
} else {
  enhancer = applyMiddleware(thunk);
}

const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;