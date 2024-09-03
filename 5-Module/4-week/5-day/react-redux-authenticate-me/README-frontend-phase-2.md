# Phase 2: Signup Form Page

The Signup Form Page is the second page that you will add to your frontend
application. The flow will be very similar to what you did for the Login Form
Page. Can you remember all the steps to implement it? If so, **try doing this on
your own before looking below for help!**

## Signup action

You will use the `POST /api/users` backend route to sign up a user.

In the session store file, add a signup thunk action that will hit the signup
backend route with `username`, `firstName`, `lastName`, `email`, and `password`
inputs. After the response from the AJAX call comes back, parse the JSON body of
the response, and dispatch the action for setting the session user to the user
in the response's body.

Export the signup thunk action.

### Test the signup action

Test the signup thunk action.

Navigate to [http://localhost:5173]. If there is a `token` cookie, remove it and
refresh. In the browser's DevTools console, try dispatching the signup thunk
action with a new `username`, new `firstName`, `lastName`, `email`, and
`password`.

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
      email: "<new email>",
      firstName: "<new first name>",
      id: "<new id>",
      lastName: "<new last name>",
      username: "<new password>"
    }
  }
}
```

If there is an error or if the previous or next state does not look like this,
then check the logic in your signup action.

**Commit your code for the signup actions!**

### Example signup action

Again, there is no absolute "right" way of doing this. As long as your signup
action is displaying the expected initial state and states after each dispatched
action, then your setup is fine.

Here's an example of the signup thunk action:

```js
// frontend/src/store/session.js

// ...
export const signup = (user) => async (dispatch) => {
  const { username, firstName, lastName, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password
    })
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
// ...
```

Here's an example of the signup thunk action test in the browser's DevTools
console:

```js
store.dispatch(
  sessionActions.signup({
    username: "NewUser",
    firstName: "New",
    lastName: "User",
    email: "new@user.io",
    password: "password",
  })
)
```

## `SignupFormPage` component

After finishing the Redux action for the signup feature, the React components
are next.

Create a folder in the `components` directory for your signup page components.
Add a __SignupFormPage.jsx__ (and __index.js__ if you want) and create a
function component named `SignupFormPage`.

Render a form with controlled inputs for the new user's `username`, `firstName`,
`lastName`, `email`, and `password`, and `confirmPassword` fields.

On submit of the form, validate that the `confirmPassword` is the same as the
`password` field, then dispatch the signup thunk action with the form input
values. Make sure to handle and display errors from the signup thunk action
if there are any. If the `confirmPassword` is not the same as the `password`,
display an error message for this.

Export the `SignupFormPage` component as the default at the bottom of the file,
then render it in __App.jsx__ at the `/signup` route.

If there is a current session user in the Redux store, then redirect the user
to the `"/"` path if trying to access the `SignupFormPage`.

Test your component by navigating to the `/signup` page. Try signing up on the
form there with a new user's information. Once you signup, you should be
redirected to the `/` route. Check your code for the `SignupFormPage` and the
`App` component if this is not the flow that you are experiencing.

Also try signing up with invalid fields to test your handling and displaying of
error messages. If you are experiencing issues, scroll to check the
example code below.

**After testing, commit your `SignupFormPage` code!**

### Example `SignupFormPage` component

Again, there is no absolute "right" way of doing this. As long as your React
application is behaving as expected, then you don't need to make your code look
exactly like the example code.

Here's an example of a `SignupFormPage` component:

```jsx
// frontend/src/components/SignupFormPage/SignupFormPage.jsx

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data?.errors) {
          setErrors(data.errors);
        }
      });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {errors.username && <p>{errors.username}</p>}
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {errors.firstName && <p>{errors.firstName}</p>}
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormPage;
```

Here's an example of what __App.jsx__ could look like now:

```jsx
// frontend/src/App.jsx

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
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
      },
      {
        path: "/signup",
        element: <SignupFormPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

### `SignupForm` CSS

Add a __SignupForm.css__ file in your __SignupFormPage__ folder. Import this CSS
file into the __frontend/src/components/SignupFormPage/SignupFormPage.jsx__
file.

```js
// frontend/src/components/SignupFormPage/SignupFormPage.jsx

// ...
import './SignupForm.css';
// ...
```

Define all your CSS styling rules for the `SignupFormPage` component in the
__SignupForm.css__ file. Practice doing some CSS now to make your signup page
look better. Make sure to **commit your code afterwards**!

[http://localhost:5173]: http://localhost:5173
