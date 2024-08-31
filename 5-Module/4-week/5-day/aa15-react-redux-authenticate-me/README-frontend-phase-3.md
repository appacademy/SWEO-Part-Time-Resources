# Phase 3: Logout, Navigation, And Profile Dropdown

The last part of the authentication flow is logging out. The logout button will
be placed in a dropdown menu in a navigation bar only when a session user
exists.

## Logout action

You will use the `DELETE /api/session` backend route to log out a user.

In the session store file, add a logout thunk action that will hit the logout
backend route. After the response from the AJAX call comes back, dispatch the
action for removing the session user.

Export the logout thunk action.

### Test the logout action

Test the logout thunk action.

Navigate to [http://localhost:5173]. If there is no `token` cookie, add one by
logging in or signing up. In the browser's DevTools console, try dispatching
the logout thunk action.

The `previous state` in the console should look like this:

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

The `next state` in the console should look something like this:

```js
{
  session: {
    user: null
  }
}
```

If there is an error or if the previous or next state does not look like this,
then check the logic in your logout action and in your session reducer.

**Commit your code for the logout action.**

### Example logout action

Again, there is no absolute "right" way of doing this. As long as your logout
action is displaying the expected initial state and states after each dispatched
action, then your setup is fine.

Here's an example of a logout thunk action:

```js
// frontend/src/store/session.js

// ...
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  dispatch(removeUser());
  return response;
};
// ...
```

Here's an example of the logout thunk action test in the browser's DevTools
console:

```js
store.dispatch(sessionActions.logout())
```

## `Navigation` component

After finishing the Redux action for the logout feature, the React components
are next. The `Navigation` component will render navigation links and a logout
button.

Make a folder called __Navigation__ nested in the __frontend/src/components__
folder which will hold all the files for the navigation bar. Add a
__Navigation.jsx__ file (and __index.js__ if desired) in the __Navigation__
folder. Inside of this file, add a React function component named
`Navigation`.

Your navigation should render an unordered list with a navigation link to the
home page. It should only render navigation links to the login and signup routes
when there is no session user; it should render a logout button when there is.

Make a __ProfileButton.jsx__ file in the __Navigation__ folder. Create a React
function component called `ProfileButton` that will render a generic user
profile icon of your choice from [React icons].

Start by installing the React icons package in your __frontend__ folder:

```sh
npm install react-icons
```

Now you can use any of the icons available in [React icons] simply by importing
the icon (i.e., component) in the file where you want to render it. To change
the size or color of the icon, wrap the icon component in a parent element like
a `div`. Manipulating the `font-size` of the parent element changes the size of
the icon. The color of the parent element will be the color of the icon. For
example, to render a big orange carrot icon:

```jsx
import { FaCarrot } from 'react-icons/fa6';

// ...

const Carrot = () => {
  return (
    <div style={{ color: "orange", fontSize: "100px" }}>
      <FaCarrot />
    </div>
  );
};
```

[Choose an icon][React icons] that will represent the user profile button and
render it in the `ProfileButton` component.

Export the `ProfileButton` component as the default at the bottom of the file,
and import it into the `Navigation` component. Render the `ProfileButton`
component only when there is a session user.

Export the `Navigation` component and import it into the `App` component. Render
the `Navigation` component so that it shows up at the top of each page.

Navigate to the [http://localhost:5173] and remove the `token` cookie if there
is one. Refresh and see if there is a navigation bar with links to the login
and signup pages. After logging in, the navigation bar should have the links
to login and signup replaced with the React icons user icon.

Here's an example of what __Navigation/Navigation.jsx__ could look like:

```js
// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const sessionLinks = sessionUser ? (
    <>
      <li>
        <ProfileButton user={sessionUser} />
      </li>
      <li>
        <button onClick={logout}>Log Out</button>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
```

Here's an example of what __App.jsx__ could look like now:

```js
// frontend/src/App.jsx

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
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
      <Navigation isLoaded={isLoaded} />
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
        path: "login",
        element: <LoginFormPage />
      },
      {
        path: "signup",
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

**Now is a good time to commit your working code.**

## `ProfileButton` component

Change the `ProfileButton` component to show a user profile icon as a button and
a list containing the session user's username, full name (by putting the user's
firstName and lastName next to each other), email, and logout button. (Move the
logout button logic from the `Navigation` component to the `ProfileButton`
component.) Remember, the logout button should dispatch the logout action when
clicked. The `ProfileButton` component should look something like this:

```jsx
// frontend/src/components/Navigation/ProfileButton.jsx

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button>
        <FaUserCircle />
      </button>
      <ul className="profile-dropdown">
        <li>{user.username}</li>
        <li>{user.firstName} {user.lastName}</li>
        <li>{user.email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    </>
  );
}

export default ProfileButton;
```

Here's an example of what __Navigation.jsx__ could look without the logout
logic:

```js
// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const sessionLinks = sessionUser ? (
    <li>
      <ProfileButton user={sessionUser} />
    </li>
  ) : (
    <>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
```

### `Navigation` CSS

Add a __Navigation.css__ file in your __Navigation__ folder. Import this CSS
file into the __frontend/src/components/Navigation/Navigation.jsx__ file.

```js
// frontend/src/components/Navigation/Navigation.jsx

// ...
import './Navigation.css';
// ...
```

Define all your CSS styling rules for the `Navigation` component in the
__Navigation.css__ file. Make your navigation bar look good and your dropdown
menu (see the next section) flow well with the rest of the elements.
**Afterwards, commit!**

### Dropdown menu

When clicked, the user profile button should trigger a component state change
and cause the session user information and logout button to be rendered in a
dropdown menu. When there is a click outside of the dropdown menu list or on the
profile button again, then the dropdown menu should disappear.

Dropdown menus in React are a little challenging. You will need to use your
knowledge of vanilla JavaScript DOM manipulation for this feature.

First, create a _state variable_ called `showMenu` to control displaying the
dropdown. `showMenu` should default to `false`, indicating that the menu is
hidden. When the `ProfileButton` is clicked, toggle `showMenu` to `true`
indicating that the menu should now be shown. Modify the return value of your
function component conditionally to either show or hide the menu based on the
`showMenu` state variable using CSS. For example, if the `showMenu` state
variable is `false`, then apply a `className` of "hidden" to the dropdown menu
element. Otherwise, don't apply that `className`. Add a `.hidden` CSS rule that
will add a CSS style of `display: none` to the dropdown menu element.

```js
// frontend/src/components/Navigation/ProfileButton.jsx

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button onClick={() => setShowMenu(!showMenu)}>
        <FaUserCircle />
      </button>
      <ul className={ulClassName}>
        <li>{user.username}</li>
        <li>{user.firstName} {user.lastName}</li>
        <li>{user.email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    </>
  );
}

export default ProfileButton;
```

Test this out by navigating to [http://localhost:5173]. If you click the profile
button, the menu list with the logout button should appear with the session
user's username, full name, and email. When you click the logout button, the
profile button and menu list should disappear. (Why?) If you try logging in
again and clicking the profile button, the menu list will stay open until you
either logout or click the button again. You'll work on this next, but first
make sure that you have the above behavior in your navigation bar.

### Closing the dropdown menu on any click

Let's now make the dropdown menu close if a user clicks anywhere outside the
dropdown menu. To do this, you need to add an event listener to the entire
document to listen for any click changes and set the `showMenu` state variable to
`false` for any clicks outside of the dropdown menu.

In other words, whenever the dropdown menu is open, you need to register an
event listener for `click` events on the entire page (i.e., the `document`) in
order to know when to close the menu. Use a `useEffect` hook to create,
register, and remove this listener.

Inside the `useEffect`, create a function called `closeMenu`. When this function
is called, set the `showMenu` state variable to `false` to trigger the closing of the dropdown
menu. Register the `closeMenu` function as an event listener for
`click` events on the entire page or `document`. The cleanup function for the
`useEffect` should remove this event listener.

```js
  useEffect(() => {
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, []);
```

If you test this on [http://localhost:5173], you'll notice that the dropdown
menu just doesn't open at all. Why do you think that is? Add a `debugger` in the
`closeMenu` function. When you click on the profile button, the `debugger` in
the `closeMenu` function will be triggered. What's happening is this: The click
on the button triggers the `onClick` handler that toggles `showMenu` to true,
but that same click then bubbles up the chain to the document listener, which
triggers `closeMenu`.

How can you fix this? First, note that you really only want the document-wide
click listener if the dropdown is open. Accordingly, adjust your `useEffect` to
add the event listener and return a cleanup function only if `showMenu` is
`true`. (Don't forget to add `showMenu` to the `useEffect` dependency array!)

```js
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);
```

Depending on your setup, this might seem to solve the issue: the dropdown might
open and close as expected. Unfortunately, however, it will not solve it for all
situations (and you want solutions that will work as widely as possible).

The core issue is that you now have a race condition of sorts. In some
scenarios, the initial click propagates to the document before the listener gets
added, and the menu opens as expected. In other situations, the listener gets
added before the click finishes propagating, and the menu closes before it ever
fully opens.

Fortunately, you don't have to sort through the various conditions that
determine the order in which various events are triggered and processed to solve
this issue. The fix in this case is much simpler. You don't actually need the
initial button click to propagate through to the outer document, so just stop
the propagation. Race cancelled; problem solved!

Inside `ProfileButton`, define a `toggleMenu` callback that stops the event propagation and toggles the value of `showMenu`. Then have the component call this function when its button is clicked:

```js
// frontend/src/components/Navigation/ProfileButton.jsx

function ProfileButton({ user }) {
  // ...
  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep click from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  // ...
  return (
    <>
      <button onClick={toggleMenu}>
        <FaUserCircle />
      </button>
      {/* ... */}
    </>
  );
}
```

Try your code again at [http://localhost:5173]. You should now see the dropdown
menu open and close as expected!

### Closing the dropdown menu on outside click only

Now, what if you try opening the menu and then clicking inside the dropdown
menu? Your dropdown menu will close. But why? Since you added the `closeMenu`
event listener to the entire HTML `document` and the dropdown menu is part of
the `document`, clicking the dropdown menu will close it! But that's typically
not what you want. Typically, you want a dropdown menu to close **only if a user
clicks OUTSIDE the dropdown.**

You will solve this problem by examining where the click happened. If a click
happens inside of the dropdown menu, do **NOT** close the menu. If the click
happens in any other element on the page, close the dropdown menu.

To apply this logic, you can use the [`.contains`] method on an HTML element to
check whether the `target` of a click `event` is within the boundaries of the
HTML element.

```js
// EXAMPLE OF AN EVENT LISTENER

onClick((event) => {
  element.contains(event.target); // true/false
  // evaluates to true if click happened inside of the element
  // evaluates to false if click happened outside of the element
});
```

To get the reference to the HTML element of the dropdown menu, you can use the
[`useRef`] React hook. One of its uses includes capturing the real DOM element
to which a virtual DOM element maps. Call it in the component and attach the
reference to the dropdown menu JSX element.

```jsx
// frontend/src/components/Navigation/ProfileButton.jsx

import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep click from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button onClick={toggleMenu}>
        <FaUserCircle />
      </button>
      <ul className={ulClassName} ref={ulRef}> {/* <-- Attach it here */}
        <li>{user.username}</li>
        <li>{user.firstName} {user.lastName}</li>
        <li>{user.email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    </>
  );
}

export default ProfileButton;
```

Next, in the `closeMenu` function, change `showMenu` to `false` only if the
`target` of the click `event` does **NOT** contain the HTML element of the
dropdown menu.

```js
  const closeMenu = (e) => {
    if (ulRef.current && !ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };
```

Now your dropdown menu should be fully functional and look something like this!

```jsx
// frontend/src/components/Navigation/ProfileButton.jsx

import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep click from bubbling up to document and triggering closeMenu
    // if (!showMenu) setShowMenu(true);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button onClick={toggleMenu}>
        <FaUserCircle />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        <li>{user.username}</li>
        <li>{user.firstName} {user.lastName}</li>
        <li>{user.email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    </>
  );
}

export default ProfileButton;
```

Congratulations on implementing an awesome dropdown menu all in React! **Make
sure to commit your code!**

[React icons]: https://react-icons.github.io/react-icons/
[`.contains`]: https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
[`useRef`]: https://react.dev/reference/react/useRef
[http://localhost:5173]: http://localhost:5173
