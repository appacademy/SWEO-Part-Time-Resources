import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import users from './users';
import places from './places';
import thunk from 'redux-thunk'
import people from './people'
import objects from './objects'
import images from './images'

const rootReducer = combineReducers({
	users,
	places,
	images,
	people,
	objects
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
	enhancer = applyMiddleware(thunk)
} else {
	const logger = require('redux-logger').default
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(logger, thunk))
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer)
}


export default configureStore;
