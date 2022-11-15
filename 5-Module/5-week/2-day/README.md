# Redux Thunks

- A thunk is just a function that returns a function
- We use middleware called thunk middleware to intercept funtions and pass them some arguments such as `dispatch` and `getState()`

- Lets say we want to retrieve data from our backend api and then send that data to our redux store.

```js
const thunkActionCreator = () => dispatch async => {
  const songs = await fetch('api/songs');
  dispatch(loadSongs(songs));
}
```

- Notice that the above function looks different from your normal action creators, normally we return an object with a type and payload
- We are NOT doing that in the above action creator, so when we dispatch this thunk to our reducer it will break because it's not a POJO with a key of type!

```js
useEffect(() => {
    dispatch(thunkActionCreator())
}, [])
```

```js
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

export default thunk;
```
- Above is an example of a thunk middleware. You will not need to make thunk middleware handlers, you will just `thunk` middleware from `redux-logger`
- We must use thunk middleware to intercept functions and provide them with the dispatch method so that we can then dispatch a normal action creator to update our store once we get the information.

```js
export const RECEIVE_FRUITS = 'RECEIVE_FRUITS';

export const fetchFruits = () => async (dispatch) => {
  const res = await fetch(`/fruits`); // get the fruits at `/fruits`
  const data = await res.json();
  res.data = data;
  if (res.ok) { // if response status code is less than 400
    // dispatch the receive fruits POJO action
    dispatch(receiveFruits(data.fruits));
  } else {
    // if response status code is 400 or greater, throw the response as an error
    throw res;
  }
};

const receiveFruits = (fruits) => {
  return {
    type: RECEIVE_FRUITS,
    fruits,
  };
};
```
