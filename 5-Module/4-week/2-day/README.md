# M5W4D2 Redux Thunks

## [Redux Docs](https://react-redux.js.org/)

## What is Redux Thunk?
- A Thunk in CS is a functions whos primary purpose is to call another function
- Redux Thunks is technically a middleware of Redux
- Redux was not originally made to handle asynchronous action, such as a fetch request
- Redux Thunk is a middle ware that will allow us to handle async actions in our redux store
- Our Redux Thunks primary purpose is to dispatch our action

## Application Workflow with Redux Reducers
- If our Action requires an API fetch, the we will use a Redux Thunk
- Dispactch our Redux Thunk on our component instead of our action
- Make a fetch to our API in our Redux Thunk
- Wait for Response
- Normalize our response
- Dispatch our Action with the Normalized response from our API call.


## Paired Long Practice
### [Long Practice: Pokedex Thunk](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-30---redux-thunk-and-authentication/long-practice--pokedex-thunk)

# EOD
