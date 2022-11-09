# What is Redux?

- Redux is another Javascript framework that is used to manage the frontend state of a web app.
- We use it to store information that can be accessed from any component in our app (kinda familiar right? just like react context)
- Redux is a very fast and lightweight framework. It retrieves and updates data very quickly while also requiring only 2kb of space to use the library!

# The 3 principles of Redux

- Single source of truth
    - The entire redux state is stored in a single POJO (plain old javascript object)
- State is read only
    - The state object is not modifiable directly, you must modify it by "dispatching actions" (more on this later)
- Changes are made with pure functions (a pure function has no side effects and only performs one task)
    - A "reducer"(again, more on this later!), is a pure function that will recieve the dispatched actions and return the updated state

# Context vs Redux

- Context was made avaliable to React after Redux was released
- Redux is generally used for larger-scale applications than what React Context can be used for. Redux provides support for middleware, and dev tools that have more features.
- Context is simpler, and requires less boilerplate to get up and running, but it shines on apps that are smaller scale without a need for middleware or complicated debug tooling.

# Redux vocab!

- State
    - Information/data stored by the app at a particular point in time.
- Store
    - A Javascript object that has a few methods, `getState()`, `dispatch(action)`, `subscribe(listener)`
    - Responsible for handling redux state
    - The store returns the current state
    - Updates the state
    - Notifies subscribed components when the state is updated
- Actions
    - Another POJO that has a `type` property
    - Actions are used to update the store
    - Actions are "dispatched", send updates to the store, so that the store can update the state
    - Generally user actions trigger actions
    - Action creators are used to dynamically pass in information to the store
- Pure functions
    - A function that takes in arguments, and returns a value
    - Does not alter any part of the program or variables that exist outside of itself.
    - No side effects
- Reducer
    - A function that is invoked when a action is dispatched
    - Recieves an action and the current redux state as arguments, and then returns an updated state
    - Is required to be a pure function(recieves arguments and then returns a value)
- Middleware
    - Actions get passed through middleware functions
    - Examples of middleware functions could be a function that logs each action being dispatched before its sent to the reducer, or to dispatch asynchronous requests
- Time traveling dev tools
    - Stores a previous list of all state changes that happened in the past, allows you to see how the state is updated each time an action is dispatched as well as recalculate your state by undoing a dispatched action.
- Thunks
    - A thunk in computing is generally referred to as a function whose only purpose is to invoke another function
    - A thunk action creator is mostly used to perform asynchronous API requests(we will use thunks to retrieve data from our backend api endpoints)

![](https://assets.aaonline.io/fullstack/react/assets/redux.gif)

# Short Practice: Create Store (10 minutes)

<br>

- ## Short Practice: Create Store Discussion (5 minutes)

<br>

# Short Practice: Actions & Reducer (10 minutes)

<br>

- ## Short Practice: Actions & Reducer Discussion (5 minutes)


<br>

# Short Practice: useDispatch & useSelector (15 minutes)

<br>

- ## Short Practice: useDispatch & useSelector Discussion (5 minutes)


<br>

# Short Practice: Using Parameters to Query the Store (15 minutes)

<br>

- ## Short Practice: Using Parameters to Query the Store Discussion (5 minutes)


<br>

# Short Practice: Using Forms with Redux (10 minutes)

<br>

- ## Short Practice: Using Forms with Redux Discussion (5 minutes)
