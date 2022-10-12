# React Reckoning II: Redux

## Application-wide state management

Currently, we can manage state in two ways:

### useState()

-   Allows for individual components to manage their own slices of state
-   Makes it easy to manage user interaction with the component
-   Difficult/impossible to pass state values down/up through components

### useContext()

-   Allows for any child components to access "global" state
-   Makes it easier/possible to pass state values down/up through components

Using both of these tools allows us to have delicate control over the state of our application

But now...it's time to go even FURTHER BEYOND

---

## `Redux`

### The best way to approach Redux is to think of it as **_`SUPER CONTEXT`_**

-   Does everything Context can do
-   Gives us access to powerful development tools to aid the dev & debugging process
-   Allows us to use `Thunks` (wait till next week to learn more!)

### **Like Context, Redux needs to be created,**

```js
// Context setup
import { createContext } from 'react';

export const MyContext = createContext();

// Redux setup
import { createStore } from 'redux';

export const MyStore = createStore();
```

### **wrapped around our application,**

```js
// Context setup
import { MyContext } from './context/MyContext';

const Root = () => {
    return (
        <MyContext.Provider value={{ ex: ample }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MyContext.Provider>
    );
};

// Redux setup
import { Provider } from 'react-redux';
import { MyStore } from './store';

const Root = () => {
    return (
        <Provider store={MyStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};
```

### **and accessed individually by each component that wants to use its state**

```js
// Context setup
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const SomeComponent = () => {
    const { whatEver, valuesYouWant } = useContext(MyContext);

    return <div></div>;
};

// Redux setup
import { useDispatch, useSelector } from 'react-redux';

const SomeComponent = () => {
    const dispatch = useDispatch();
    const stateValues = useSelector();

    return <div></div>;
};
```

This Redux setup isn't the full story. Just a cut-down version to see the parallels of Redux and Context.

Let's dive into the details.

---

## What's Redux made of?

New major Redux concepts: Store, Actions, Dispatching, Reducers

### `Store`

The `store` is where our "global" state is stored

To create our `store`, we must import `createStore` from `'redux'`

```js
import { createStore } from 'redux';

const store = createStore(reducer, preloadedState, enhancer);
```

The `store` is a **READ ONLY** object

-   Like with state, we NEVER want to directly mutate the store
-   Instead, we must use an `action` to update our store

### `Actions`

An `action` is just a POJO!

-   `type`: a string to declare what this action is doing
    -   Mandatory
-   `payload`: the data to be added to the `store`
    -   Optional

```js
// Just a representation of a store, not working Redux code
const catStore = ['Momo'];

// action to add a new cat
const addCat = {
    type: 'ADD_CAT',
    payload: 'Tenten',
};

// After action is used
console.log(catStore); // ['Momo', 'Tenten']
```

In this example, I created an object specifically to add "Tenten" as a new cat to our cat store

If I wanted to add another cat, I'd have to create another object, which is not very programmatic

We instead can use an `action creator` to create multiple `actions` with different data

```js
// Just a representation of a store, not working Redux code
const catStore = ['Momo'];

// action creator to add a new cat
export const addCat = (data) => {
    return {
        type: 'ADD_CAT',
        payload: data,
    };
};

addCat('Tenten');
addCat('Kiki');

// After action creators are used
console.log(catStore); // ['Momo', 'Tenten', 'Kiki']
```

Since `actions` and `action creators` are plain JS, they can't affect our `store` on their own

To trigger an `action` to update our `store`, we must `dispatch` it

### `Dispatching`

To communicate with our Redux `store`, we must `dispatch` an `action`

We have a `dispatch` method available to us on the `store`

```js
import { createStore } from 'redux';

const store = createStore(reducer, preloadedState, enhancer);

store.dispatch(someAction);
```

However, we will mostly be using the `useDispatch()` hook

`useDispatch()` returns a function, conventionally named `dispatch`

```js
import { useDispatch } from 'react-redux';
import { addCat } from 'the/cat/example';

const CatComponent = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(addCat('Tenten'))}>
                Add a cat named Tenten!
            </button>
            <button onClick={() => dispatch(addCat('Kiki'))}>
                Add a cat named Kiki!
            </button>
        </div>
    );
};
```

`dispatch()` is used to send an `action` to our `reducer`

You can think of this like using a `setState()` function from `useState()`

-   Calling `setCat()` will change our cat state array
-   Calling `dispatch(addCat())` will change our cat `store` array

### `Reducer`

The ONLY function that will make changes to our `store`

When an `action` is `dispatched`, it's sent to our `reducer`

Depending on the `action type`, the reducer will decide how to update our `store`

Since the `store` is **READ ONLY**, it's extremely important we never directly modify it

Instead, we'll make a copy of our current state, then make changes to that copy

Continuing our cat example, our `reducer` might look something like this

```js
const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return [...state, action.payload];
        default:
            return state;
    }
};
```

Each time we run `dispatch(addCat("Cat name"))`, our `reducer` runs with our `store`'s current state and the `action` we used

```js
// representation of what's happening

const currentCatStore = ['Momo'];

dispatch(addCat('Tenten'));

reducer(['Momo'], { type: 'ADD_CAT', payload: 'Tenten' });

// switch (action.type) === reducer says,
// "What's current type? Looks like 'ADD_CAT'"

// return [...state, action.payload] === reducer says,
// "Let's move everything out of our old state into an array,
// then add our new data, and make that our new state!"

const newCatStore = ['Momo', 'Tenten'];

dispatch(addCat('Kiki'));

reducer(['Momo', 'Tenten'], { type: 'ADD_CAT', payload: 'Kiki' });

const evenNewerCatStore = ['Momo', 'Tenten', 'Kiki'];
```

Our `reducer` will manage _all_ state changes, so it can grow to be quite large

```js
const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return [...state, action.payload];

        case 'ADD_CATS':
            return [...state, ...action.payload];

        case 'REMOVE_CAT_BY_NAME':
            const newState = state.filter((cat) => cat !== action.payload);
            return newState;

        case 'REMOVE_LAST_CAT':
            const newState = [...state];
            newState.splice(newState.length - 1, 1);
            return newState;

        case 'REMOVE_ALL_CATS':
            return [];

        // Many more cat things...
        default:
            return state;
    }
};
```

And, if we have more states to manage (dogs, toys, treats, owners), our `reducer` can very quickly become difficult to manage

Instead of managing all of these states in one file, we can separate our `reducers` to make it easier to read and manage

```js
// catReducer.js
const catReducer = () => {};

// dogReducer.js
const dogReducer = () => {};

// treatReducer.js
const treatReducer = () => {};

// toyReducer.js
const toyReducer = () => {};

// ownerReducer.js
const ownerReducer = () => {};
```

Then, we create a `rootReducer` using `combineReducer`

```js
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cat: catReducer,
    dog: dogReducer,
    treat: treatReducer,
    toy: toyReducer,
    owner: ownerReducer,
});
```

Now all of our `reducers` are accessible from a single place!

---

## Creating and using our `store`

Now that we know what a reducer is, let's go back to creating our `store`

`createStore` takes three arguments

-   `reducer`
    -   Allows the store to be updated
    -   Mandatory
-   A "starting" state
    -   Anything you want to exist in the state by default
    -   Optional
-   An enhancer function
    -   Allows us to use cool developer tools and features
    -   Not something we'll ever have to setup on our own
    -   Optional

Our `store` would look something like this

```js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import catReducer from './catReducer';
import dogReducer from './dogReducer';
import treatReducer from './treatReducer';
import toyReducer from './toyReducer';
import ownerReducer from './ownerReducer';

const rootReducer = combineReducers({
    cat: catReducer,
    dog: dogReducer,
    treat: treatReducer,
    toy: toyReducer,
    owner: ownerReducer,
});

let enhancer;

if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
            : compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
```

`configureStore` is just a function that we made to create our `store` in whatever file we want

We'll always do this in our root `index.js`

This is just like creating a custom `useContext` function

In `index.js`, we can create our `store` and pass it to our `Provider`

```js
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};
```

Our final step is to use our `store` in our components

To do this, we'll use the `useSelector` hook

`useSelector` takes a callback function, with a default parameter of our ENTIRE redux `store`

Since we have many different `reducers`, all managing their own state, we want to select the specific state we're after

```js
import { useSelector } from 'react-redux';

const CatComponent = () => {
    const cats = useSelector((state) => state.cat);
    const dogs = useSelector((state) => state.dog);

    return (
        <ul>
            {cats.map((cat, i) => (
                <li key={i}>{cat}</li>
            ))}
        </ul>
    );
};
```

---

Note on `switch/case`

-   Simply an easy way to handle different options in a function
-   Exact same functionality could be handled with `if` statements

```js
const reducer = (state = [], action) => {
    if (action.type === 'ADD_CAT') {
        return [...state, action.payload];
    } else {
        return state;
    }
};
```

`Reducers` can grow to be quite large, so chaining `if, else if, else if, ...` just gets ugly

```js
const reducer = (state = [], action) => {
    if (action.type === 'ADD_CAT') {
        return [...state, action.payload];
    } 
	else if (action.type === 'ADD_CATS') {
        return [...state, ...action.payload];
    } 
	else if (action.type === 'REMOVE_CAT_BY_NAME') {
        const newState = state.filter((cat) => cat !== action.payload);
        return newState;
    } 
	else if (action.type === 'REMOVE_LAST_CAT') {
        const newState = [...state];
        newState.splice(newState.length - 1, 1);
        return newState;
    } 
	else if (action.type === 'REMOVE_ALL_CATS') {
        return [];
    } 
	else return state;
};
```
