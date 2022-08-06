# Practice: Basic Hooks - useState

In this practice you will learn to use one of the most basic hooks, the
[`useState`] hook. You will use the `useState` hook to change a background theme
from light to dark, as well as to increment and decrement a number.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Storing a background theme in state

Take a look at the __UseState.css__ file in the __src/components/UseState__
directory. Notice that there is a class for `light` and for `dark`. You will use
these classes to change your background based on a button click.

Open the __index.js__ file in the __UseState__ directory.

Import the __UseState.css__ file into your __index.js__ file using a relative
path.

```js
   import './UseState.css';
```

To create state in your component, you will also need to import the `useState`
hook from the `react` package. Place this import above your CSS import.

```js
   import {useState} from 'react';
```

Inside your functional component, type `console.log(useState('light'))`. In
your sandbox browser DevTools, look at the console. Notice the two values that
are returned in the array. The first value is your current state; the second
value is the updater function used to update the state. Now remove the
`console.log`.

Next, inside your functional component, declare state by destructuring the two
values returned from the invoked `useState` function. Give this useState
function an initial state of `'light'`.

```js
   const [theme, setTheme] = useState('light');
```

Look at the React DevTools in your sandbox browser. Click on the `UseState`
component. Notice under `hooks` -> `State` you will see the string `light`. This
is the default value you stored in state.

You are now going to add this light theme to your JSX. Inside the `div` element,
add a `className` and give it the value `theme`. Remember your curly braces for
JavaScript.

When you look at your browser you should see the light theme color as your
background.

## Alternating the theme

You've used the `useState` hook to create a background color, but you have not
yet used the updater function. Now you are going to create buttons that will
allow the theme to either be light or dark.

Beneath the `h1` tag, create a `button` element with the child text of `Dark`.

Inside the button you will use your first [event handler]. Create an `onClick`
handler as an attribute to your button element. Remember that `onClick` handlers
in React use camelCase and should be assigned a function. Give the `onClick`
handler an anonymous function that returns the `setTheme` updater function
invoked with the string argument `'dark'`.

In the browser, click the button. Your background should now switch from light
to dark.

Repeat the same process to create a button for `Light`.

## Add a count slice of state

When you want to store information for a different concern in state, you simply
add an additional slice of state to the component using `useState`.

You now need a slice of state for a count. Create that slice using `count` and
`setCount` as destructured indexes. Set the initial value to the number `0`.

Check your React DevTools to see that you now have a slice of state with the
initial value of `"light"` and a slice of state with the initial value of `0`.

You also want to see a `0` as the count in your browser. Beneath the Dark
button, create an `h1` element and use the `count` variable as the child
element.

Create a `button` element with the child text, `Increment`. Use an `onClick`
event listener and the updater function for the count to increment the count.

Test this button in your browser.

Create a decrement button using the same technique.

## Optional Callback Function

An updater function returned by `useState` can take a callback function as an
argument. The updater function will pass the previous state as an argument to
the callback when invoking it. You are now going to use this feature with the
`setCount` function to ensure that the state is updated based on the actual
previous state.

Inside your `Increment` button `setCount` invocation, remove the `count + 1` and
replace it with `(prevCount) => prevCount + 1`. Do the same for the `Decrement`
button (with the appropriate adjustment!). While you will not see a difference
here, you are now ensuring that your changes based on a previous state will
update correctly.

Using a callback to update state whenever the update depends on the previous
state is advisable because state updates are handled asynchronously and can be
bundled together. In other words, without the callback, you cannot be sure that
the value stored in `count` when the update is invoked will always represent the
most current value.

## Bonus A

Remove one of the buttons that changes the theme. Use the single remaining
button to toggle the theme from light to dark.

## Bonus B

Add the container `state` class from `UseState.css` to your wrapping `div` along
with the `theme` variable.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Create `state` using the `useState` hook
2. Update `state` using the returned updater function
3. Create a separate slice of state for each concern
4. Use the `onClick` event listener to execute some functionality when a button
   is clicked
5. Use the optional callback function to ensure that the current state is based
   on the previous state

[`useState`]: https://beta.reactjs.org/reference/usestate
[CodeSandbox]: https://www.codesandbox.io
[event handler]: https://beta.reactjs.org/learn/responding-to-events#adding-event-handlers