# Phase 1: Login form page

The Login Form Page is the first page that you will add to your frontend
application.

## Session actions and reducer

First, you will add the Redux store actions and reducers that you need for this
feature. You will use the `POST /api/session` backend route to log in a user
as well as add the session user's information to the frontend Redux store.

Make a file called __session.js__ in the __frontend/src/store__ folder. This
file will contain all the actions specific to the session user's information and
the session user's Redux reducer.

In this file, add a `session` reducer to update the current session user's
information. The `session` slice of state should look like this if there is a
current session user:

```js
{
  user: {
    id,
    email,
    username,
    firstName,
    lastName
  }
}
```

If there is no session user, then the `session` slice of state should look like
this:

```js
{
  user: null
}
```

By default, there should be no session user in the `session` slice of state.

Create two POJO action creators. One should create an action that will cause the
reducer to set the `user` in the `session` slice of state to the action
creator's input parameter. The other should create an action that will cause the
reducer to remove the session user. Extract their types into a constant that the
action creator and `session` reducer will both use. Enable the reducer to adjust
the session slice of state appropriately for both of these actions.

You need to call your backend API to log in, and then set the session user from
the response. To do this, create a thunk action for making a request to `POST
/api/session`. Make sure to use the custom `csrfFetch` function from
__frontend/src/store/csrf.js__. The `POST /api/session` route expects the
request body to have a key of `credential` with an existing username or email
and a key of `password`. After the response from the AJAX call comes back, parse
the JSON body of the response, and dispatch the action for setting the session
user to the user in the response's body.

Export the login thunk action, and export the reducer as the default export.

Import this reducer into the file with the root reducer,
__frontend/src/store/store.js__. Set a key of `session` in the `rootReducer`'s
`combineReducer` object argument to the session reducer.

### Test the session actions and reducer

Login should be working so give it a try! Test the login thunk action and the
`session` reducer. (For now, ignore your linter's warning that `removeUser` is
never used; it will be shortly!)

Import all the actions from __session.js__ into the frontend entry file,
__frontend/src/main.jsx__. Then attach the actions to the `window` at the key of
`sessionActions`:

```js
// frontend/src/main.jsx

// ... other imports
import * as sessionActions from './store/session'; // <-- ADD THIS LINE

const store = configureStore();

if (import.meta.env.MODE !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions; // <-- ADD THIS LINE
}
// ...
```

Navigate to [http://localhost:5173] and in the browser's DevTools console, try
dispatching the login thunk action with the demo user login credentials.

The `previous state` in the console should look like this:

```js
{
  session: {
    user: null
  }
}
```

The `next state` in the console should look something like this:

```js
{
  session: {
    user: {
      email: "demo@user.io",
      firstName: "Demo",
      id: 1,
      lastName: "Lition",
      username: "Demo-lition"
    }
  }
}
```

If there is an error or if the previous or next state does not look like this,
then check your logic in your session reducer and your actions. If you are
still having issues, scroll to check the example code below.

Once you finish testing, **commit your code.**

### Example session actions and reducer

There is no absolute "right" way of doing this. As long as your `session`
actions and reducers are displaying the expected initial state and states after
each dispatched action, then your setup is fine.

Here's an example for the `session` actions and reducer:

```js
// frontend/src/store/session.js

import { csrfFetch } from './csrf';

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password
    })
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
```

Here's an example for the `rootReducer` setup:

```js
// frontend/src/store/store.js

// ...
import sessionReducer from './session';

const rootReducer = combineReducers({
  session: sessionReducer
});
// ...
```

Here's an example for the login thunk action test in the browser's DevTools
console:

```js
store.dispatch(
  sessionActions.login({
    credential: "Demo-lition",
    password: "password"
  })
)
```

## `LoginFormPage` component

After finishing the Redux actions and the reducer for the login feature, the
React components are next.

Create a __components__ folder in the __frontend/src__ folder. This is where all
your components besides `App` will live.

Make a folder called __LoginFormPage__ nested in the new __components__ folder
which will hold all the files for the login form. Add a __LoginFormPage.jsx__
file in the `LoginFormPage` folder. (You can also add an __index.js__ file to
make importing easier if you want.) Inside __LoginFormPage.jsx__, add a React
function component named `LoginFormPage`.

Render a form with a controlled input for the user login credential (username or
email) and a controlled input for the user password.

On submit of the form, dispatch the login thunk action with the form input
values. Make sure to handle and display errors from the login thunk action
if there are any.

Export the `LoginFormPage` component as the default at the bottom of the file,
then render it in __App.js__ at the `/login` route. (**Hint:** You will need
to import `createBrowserRouter` and `RouterProvider` into __App.jsx__ to do
this.)

If there is a current session user in the Redux store, then redirect the user to
the `/` path if trying to access the `LoginFormPage`. (Just have the `/` path
render an `h1` with `Welcome!` for now.)

Test your component by navigating to the `/login` page. Try logging into the
form there with the demo user's credentials. Once you login, you should be
redirected to the `/` route. Check your code for the `LoginFormPage` and the
`App` component if this is not the flow that you are experiencing.

Also try logging in with invalid fields to test your handling and displaying of
error messages.

After testing, **commit your `LoginFormPage` code**!

### Example `LoginFormPage` component

Again, there is no absolute "right" way of doing this. As long as your React
application is behaving as expected, then you don't need to make your code look
exactly like the example code below.

Here's an example for `LoginFormPage` component:

```jsx
// frontend/src/components/LoginFormPage/LoginFormPage.jsx

import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data?.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && <p>{errors.credential}</p>}
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginFormPage;
```

Here's an example of what __App.jsx__ could look like now:

```jsx
// frontend/src/App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Welcome!</h1>
  },
  {
    path: '/login',
    element: <LoginFormPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

### `LoginForm` CSS

Add a __LoginForm.css__ file in your __LoginFormPage__ folder. Import this CSS
file into the __frontend/src/components/LoginFormPage/LoginFormPage.jsx__ file.

```js
// frontend/src/components/LoginFormPage/LoginFormPage.jsx

// ...
import './LoginForm.css';
// ...
```

Define all your CSS styling rules for the `LoginFormPage` component in the
`LoginForm.css` file. Practice doing some CSS now to make your login page
look better. Make sure to **commit your code afterwards**!

# Restore the session user

Right now, if you login successfully, you get redirected to the `/` route. If
you refresh at that `/` page and navigate to the `/login` page, then you
will not be redirected because the store does not retain the session user
information on a refresh. How do you retain the session user information
across a refresh? By loading the application after accessing the route to
get the current session user `GET /api/session` and adding the user info to the
Redux store again.

Add and export a `restoreUser` thunk action in __frontend/src/store/session.js__
that will call the `GET /api/session`, parse the JSON body of the response, and
dispatch the action for setting the session user to the user in the response's
body.

Test your thunk action by logging in then refreshing at the
[http://localhost:5173] route. Make sure you have a `token` in your cookies. In
the browser's DevTools console, try dispatching the restore session user
thunk action. (Remember, you've already put all session actions on the window!)

The `previous state` in the console should look like this:

```js
{
  session: {
    user: null
  }
}
```

The `next state` in the console should look something like this:

```js
{
  session: {
    user: {
      email: "demo@user.io",
      firstName: "Demo",
      id: 1,
      lastName: "Lition",
      username: "Demo-lition"
    }
  }
}
```

If you don't see this behavior, then check your syntax for the `restoreUser`
thunk action.

Once your test is successful, use this thunk action inside of __App.jsx__ after
the `App` component's first render. To do this, create a generic `Layout`
component that renders your `App`'s routes only after `restoreUser` has
returned.

**Hint:** Inside `Layout`, create a boolean slice of local state--no need to
store this in your Redux store!--that tracks whether or not the user has been
loaded. Remember, too, that you cannot make a `useEffect` an `async` function!

**Commit after testing!**

## Example restore session user thunk action

Again, there is no absolute "right" way of doing this. As long as your React
application is behaving as expected, then you don't need to make your code look
exactly like the example code below.

Here's an example of the restore session user thunk action:

```js
// frontend/src/store/session.js

// ...
export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
// ...
```

Here's an example of how to test the `restoreUser` thunk action in the DevTools
console:

```js
store.dispatch(sessionActions.restoreUser());
```

Here's an example of what __App.jsx__ could look like now:

```jsx
// frontend/src/App.jsx

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from './store/session';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <h1>Welcome!</h1>
      },
      {
        path: '/login',
        element: <LoginFormPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

Next up: Signup Form Page!

[http://localhost:5173]: http://localhost:5173
