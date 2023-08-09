import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import sessionReducer from "./session";
import recipeReducer from "./recipe";
import userReducer from "./user";

const rootReducer = combineReducers({
    recipe: recipeReducer,
    user: userReducer,
    session: sessionReducer
})

// if (process.env.NODE_ENV === "production") {
//     enhancer = applyMiddleware(thunk);
//   } else {
//     const logger = require("redux-logger").default;
//     const composeEnhancers =
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     enhancer = composeEnhancers(applyMiddleware(thunk, logger));
//   }
  
  const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState);
  };
  
  export default configureStore;