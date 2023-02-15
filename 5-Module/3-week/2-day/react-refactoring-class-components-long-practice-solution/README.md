# Refactor Widgets App

In this project, you will refactor the Class Components in an existing React
application into Function Components. By the end of the project you should be
able to:

* Use the `useState` Hook to convert state instance variables to function-based
  state variables
* Explain the use cases for the lifecycle methods `componentDidMount`,
  `componentDidUpdate`, and `componentWillUnmount`, as well as when each will
  run
* Use `useEffect` to replicate the behavior of those lifecycle methods while
  also understanding how the application of `useEffect` differs from those
  methods
* Use `useRef` to create a ref that will persist across renders

## Phase 0: Set Up

Start by cloning the Widgets application starter from the `Download` link at the
bottom of this page.

Run `npm install` to install all the packages.

To start the application, run `npm start` and open [http://localhost:3000] to
see the widgets displayed. Each section shown on the page is a different
component in the __components__ folder.

## Phase 1: `App`

In this phase, you will refactor the `App` component from a Class Component into
a Function Component. The `App` component, which receives no props, is rendered
inside of the entry file (__src/index.js__) and is responsible for rendering the
different widgets.

Begin by changing the opening class declaration to a function declaration. 

Next, use `useState` to convert the `showClock` state variable in the `App`
Class Component into a state variable in the `App` Function Component. (Don't
forget to update your imports!) Replace any calls to `this.setState` with calls
to the setter function returned by `useState`. Similarly, convert any instances
of `this.state.showClock` to its corresponding `showClock` variable in the
Function Component.

Convert the `toggleClock` instance method into a regular function. Change any
references to `this.toggleClock` simply to `toggleClock` to reflect this change.

Test your changes in the browser. Do all the widgets still work?
Congratulations! You've successfully converted your first Class Component into a
Function Component. Worth noting: all the components that the `App` component
renders as its children are still Class Components while `App` is now a Function
Component. Class and Function Components can be used interchangeably in a React
application.

[http://localhost:3000]: http://localhost:3000
[useRef]: https://reactjs.org/docs/hooks-reference.html#useref