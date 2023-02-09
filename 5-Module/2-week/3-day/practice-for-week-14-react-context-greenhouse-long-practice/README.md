# Greenhouse Project

In this project, you will be creating a frontend application that maintains a
mock greenhouse. You will display and control the climate of the greenhouse
using React context. By the end of the project, you should be able to:

* Create a context, a context Provider with a dynamic value object, and a React
  custom wrapper hook
* Connect multiple components to a context
* Change the value of a context in a React component

## Phase 0: Set Up

- Clone the repo from the `Download` link below and run `npm install`.
- Study the code in each of the files to get a feel for what is going on.
  You will be using a package called [React Slider] to visually adjust the
  thermometer and hygrometer.
- Start the development server by running `npm start` and take a look at what
  you will be working with.

## Phase 1: Greenhouse Theme

In this first phase, you will connect the theme stored in the `ThemeContext` to
change the look of the `Greenhouse` component.

**Take a look at the code in the `src/context/ThemeContext.js` file.**

- Notice that a new context called, `ThemeContext`, has been created.
- Also notice that a Provider for that context has been created.
- The value passed to the Provider is an object with two keys,`themeName`, and
  `setThemeName`.
- A custom React hook called `useTheme` which returns the value of the
  `ThemeContext` has also been created.
- The `themeName` state will eventually be able to switch between two modes,
  `"day"` or `"night"`.

**Take a look at the code in the `src/index.js`.**

- The Provider created for the `ThemeContext` wraps the entire application
  inside of the `Root` component.
- This gives all nested components the ability to gain access to the
  `ThemeContext`'s value.

**Take a look at the code in `src/components/Greenhouse/Greenhouse.js`.**
Your job is to use the value of `ThemeContext` in the `Greenhouse` component.

- There are two images imported into the `Greenhouse` component, `dayImage` and
  `nightImage`.
- You want to display a different image based on the `themeName` state that is
  passed in ThemeContext Provider's value object. If `themeName` is `"day"`,
  then `dayImage` should be displayed. If the `themeName` is `"night"`,
  `nightImage` should be displayed.
- To use the `ThemeContext` value in this component, use the `useTheme` hook
  from `src/context/ThemeContext.js` to bring in the `themeName` and
  `setThemeName` properties and use them in the component.

**Time to test in the browser.**

Inside `ThemeProvider` in the `ThemeContext.js` file, you can manually
change the default state. Check to see that the proper image displays when `themeName` is set to `'day'` and when it is set to `'night'`. (Remember to reload the page after changing the default.)

Congratulations, you just connected a component to a context!

[React Slider]: https://www.npmjs.com/package/react-slider