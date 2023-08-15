import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import users from './users';
import spots from './spots'


const rootReducer = combineReducers({
	users,
	spots
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
	enhancer = thunk
} else {
	const logger = require('redux-logger').default;
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(logger, thunk))
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;
