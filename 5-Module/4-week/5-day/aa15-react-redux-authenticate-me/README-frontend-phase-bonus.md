# Bonus Phase: Nest Login And Signup Buttons In Dropdown Menu

Instead of having navigation buttons to open the login and signup form modals,
you may want to trigger the opening of the login and signup form modals from
options in the profile dropdown menu.

You will be adding the triggers for opening the modals in the `ProfileButton`
component, which renders the user session information and the dropdown menu,
instead of the `Navigation` component.

## `Navigation`

Reminder: the `Navigation` component lives in the
__frontend/src/components/Navigation/Navigation.js__ file.

First, you need the application to render the profile button and dropdown menu
regardless of whether or not the user is logged in. Currently, this logic lies in the
`Navigation` component. Refactor the `Navigation` component to render the
`ProfileButton` component even if there is no session user.
Also, remove the `OpenModalButton`s as you will be adding the triggers for
opening the modals in the `ProfileButton` component instead.

Here's an example of what the `Navigation` component could look like now:

```jsx
// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
  );
}

export default Navigation;
```

## `ProfileButton`

Reminder: the `ProfileButton` component lives in the
__frontend/src/components/Navigation/ProfileButton.jsx__ file.

Now, update the `ProfileButton` component to render a different list of dropdown
menus depending on whether or not there is a session user. If there is a session
user, show the same user session information and the logout button. If there is
**no** session user, show two menu options:

* `OpenModalButton` that renders a button text of `Log In` and opens the
  `LoginFormModal` when clicked
* another `OpenModalButton` that renders a button text of `Sign Up` and opens
  the `SignupFormModal` when clicked

Here's an example of what the `ProfileButton` component could look like now:

```jsx
// frontend/src/components/Navigation/ProfileButton.jsx

import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../store/session';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
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
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.firstName} {user.lastName}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <OpenModalButton
                buttonText="Log In"
                modalComponent={<LoginFormModal />}
              />
            </li>
            <li>
              <OpenModalButton
                buttonText="Sign Up"
                modalComponent={<SignupFormModal />}
              />
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
```

Confirm that your application is still rendering the profile button and dropdown
menu regardless of whether or not a user is signed in. Make sure both the login
and signup form modals still work as intended when triggered by a click in the
dropdown menu.

**Commit, commit, commit!**

### OPTIONAL: Close dropdown menu when login or signup modals open and on logout

You may have noticed that when you click the `Log In` or `Sign Up` button in the
dropdown menu, the dropdown menu doesn't close. Nor does it close when you click
`Logout`. This may be a desired feature for some, but if you do want it to close
when these buttons are clicked, then you'll need to do one more small thing.

Remember, the dropdown menu will close when the `showMenu` component state
variable in the `ProfileButton` component is set to `false`. So you will want to
close the dropdown when the `Log In` or `Sign Up` buttons are clicked.

Remember that the `onButtonClick` prop on the `OpenModalButton` component is an
optional callback function that will be called when the button to trigger the
modal opening is clicked.

Refactor the `ProfileButton` component by passing in an `onButtonClick` prop
into both `OpenModalButton` components as a callback function that will close
the dropdown menu when invoked. Then for logout, you can use the same callback
function to close the dropdown menu after the logout `dispatch`.

Here's an example of what the `ProfileButton` component could look like now:

```jsx
// frontend/src/components/Navigation/ProfileButton.jsx

import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../store/session';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button onClick={toggleMenu}>
        <FaUserCircle />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.firstName} {user.lastName}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <OpenModalButton
                buttonText="Log In"
                onButtonClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
            </li>
            <li>
              <OpenModalButton
                buttonText="Sign Up"
                onButtonClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
```

Confirm that the profile dropdown menu closes when the `Log In`, `Sign Up`, and
`Logout` buttons are clicked in the dropdown menu.

### OPTIONAL: `OpenModalMenuItem`

Having the `Log In` and `Sign Up` triggers rendered as buttons in the
dropdown menu may be a desired feature for some, but if you want it to look like
any other dropdown menu list item, then you can create another generic component
much like the `OpenModalButton` component that will use an `li` element instead
of a `button` element to trigger the opening of the modals.

Inside the __frontend/src/components/Navigation__ folder, create a file called
__OpenModalMenuItem.jsx__. Inside of that file, create and export as default a
function component called `OpenModalMenuItem`.

The `OpenModalMenuItem` component code should look **exactly** like the
`OpenModalButton` component code except:

* change the `buttonText` prop to `itemText`
* change the `onButtonClick` prop to `onItemClick`

Here's an example of what the `OpenModalMenuItem` component could look like:

```jsx
// frontend/src/components/Navigation/OpenModalMenuItem.jsx

import React from 'react';
import { useModal } from '../../context/Modal';

function OpenModalMenuItem({
  modalComponent, // component to render inside the modal
  itemText, // text of the menu item that opens the modal
  onItemClick, // optional: callback function that will be called once the menu item that opens the modal is clicked
  onModalClose // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (typeof onItemClick === "function") onItemClick();
  };

  return (
    <li onClick={onClick}>{itemText}</li>
  );
}

export default OpenModalMenuItem;
```

Update the `ProfileButton` prop to use the `OpenModalMenuItem` instead of the
`OpenModalButton` component for triggering the opening of the `LoginFormModal`
and `SignupFormModal`.

Here's an example of what the `ProfileButton` component could look like now:

```jsx
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button onClick={toggleMenu}>
        <FaUserCircle />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.firstName} {user.lastName}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <OpenModalMenuItem
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalMenuItem
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
```

Time to test your code! Head to the home page, [http://localhost:5173], and
make sure you are logged out. Click the `Log In` and `Sign Up` menu items and
make sure the modals pop up and function as before.

**Remember to commit your code frequently!**

[http://localhost:5173]: http://localhost:5173
