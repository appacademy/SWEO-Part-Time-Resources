# Redux

## What is Redux

Redux is a Javascript framework for centralized state management. We can use Redux to help us manage the state of our components across all components (similarly to context), and we can manipulate this state using redux-specific functions.

Redux is one of many state management frameworks, but it has become one of the most popular for use with react applications. It is important to note that Redux does add a little more bloat to our application, but at the benefit of getting more seamless single-page application data flow.

*NOTE*: Not every feature, nor every react application needs redux. It is up to you, as a developer, to determine when it is best to include it, and for what functionality.


## Redux Things to Know

### Thunk

A thunk is a pure Javascript function that allows us to send and receive data from the frontend and the backend. This is like our police dispatcher. They are responsible for handling the call, and then starting the actions needed to handle the state. For this reason, when we want to invoke a Thunk we use a react hook called `useDispatch`, and then `dispatch()` our thunk.

One Thunk can be used by many components, but it responsbile for retrieving data from one particular route within the backend (ususally just one)


### Action Creator

An Action Creator is a function that packages our data from the thunk, and sends the necessary information to the right part of the reducer. This is like the Captain of a police station sending a selected team of individuals to handle the call to action instantiated by the Thunk.

One the action is created, it gets sent to our reducer. One action can be used by many different thunks, but is responsible for one specific action (think of this like the conditional within an if statement)


### Reducer

The reducer is in charge of networking a particular slice of state to the main redux store. It will see what it is supposed to do with the action, manipulate the data, and then adjust the slice of state within its respective part of the store. Each Reducer can have many different types of actions (create, read, update, delete, or some variation of all of these). All reducers meet at the main reducer function located at the center of a store. ususally in `combineReducers`.


### Store

The store is HQ. It is where everything is stored, retrieved, and manipulated. The store is made up of all the different slices of state (or many reducers). An application typically has 1 store, many reducers.

You can apply middleware to the store as well

### useSelector()

A react hook that allows us to retrieve data from the store



## The Data Flow (MEMORIZE THIS)

It is time to talk about the data flow. How everything in a full stack application works together. This is the bread and butter of your debugging. The is is the way your workflow should typically work when building a project from scratch. This is your source of truth. Memorizing this will help you master Mod 4 and 5, and will set you up to succeed with flying colors in Mod 6, capstone, and beyond. This is the exact same data flow Instructors use when we need to debug your projects.

The Data Flow is as follows:

1. A user performs some sort of action in the browser
2. The client (react) packages the information from its component and sends it to the thunk
3. The thunk (responsbile for 2 things) sends information to the backend route
4. Backend route (responsible for 2 things). Responsbile for preparing data for the database
5. Database, responsbile for storing and sending data
6. The backend route sends a response to the Thunk that called it
7. The thunk prepares the response data for the action (or intercepts errors)
8. The action creator packages the data in the form of a payload, and ties it to a case
9. The reducer receives the case and changes the state in store
10. React component retrieves the store via `useSelector` and sends it back to the browser
11. User is happy


We can condense some of these to create the 9 step plan

1. Browser
2. React component
3. Thunk
4. Backend route
5. Thunk (again)
6. Action creator
7. Reducer
8. React component (via useSelector)
9. Browser (with state now changed)

## Redux Set Up

### Creating the store

```js
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
     } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from './pokemon';

// reducer imports


const store = createStore(reducer, preloadedState, enhancer);

// God Tier Reducer
const rootReducer = combineReducer({
    pokemonState: pokemonReducer
});

// middleware

let enhancer;
if(import.meta.env.MODE === 'production'){
    enhancer = applyMiddleware(thunk);
} else {
    const logger = (await import("redux-logger")).default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer); // middlewares go in here
};

export default configureStore


```



### Create an action creator

```js
//Constants
const SET_POKEMON = 'pokemon/setPokemon';
const CREATE_POKEMON = 'pokemon/createPokemon';

const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload
});

const createPokemon = (newPokemon) => ({
    type: CREATE_POKEMON,
    payload: newPokemon
});

```

## Create Reducer slices

In the above example, we have two actions, we should have a reducer case for each
```js
const initialState = {
    allPokemon: [],
    byId: {}
};

function pokemonReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_POKEMON:
            newState = {...state}; // make a shallow copy of state
            newState.allPokemon = action.payload //
            for(let mon of action.payload){
                newState.byId[mon.id] = mon; // sets individual pokemon
            }
            return newState;
        case CREATE_POKEMON:
            newState = {...state}; // shallow copy
            newState.allPokemon = [...newState.allPokemon, action.payload]; //adds newPokemon and makes a new array shallow copied
            const id = action.payload.id;
            newState.byId = { ...newState.byId, [id]: action.payload }
            return newState
        default:
            return state;
    }
}

export default pokemonReducer;


```

## Using the pokemon state

```js
import {useSelector} from 'react-redux';

const PokemonComponent = () => {
    const pokemon = useSelector((state)=> state.pokemonState.allPokemon);

    if(!pokemon){
        return <h1>Loading...</h1>
    }
    return (
        <>
        <h1>Pokemon</h1>
        {pokemon.map((mon, idx)=> (
            <p key={`${idx}-${mon.name}`}>{mon.name}</p>
        ))}
        </>
    )
}

export default PokemonComponent;

```
