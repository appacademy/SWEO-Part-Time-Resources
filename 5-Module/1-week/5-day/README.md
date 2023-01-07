# `M5W1D5`

# Hooks

Hooks are a way for us to update content on the page that will persist through rerenders

This will NOT persist data through refreshes

## `useState()`

`useState()` takes any value and returns an array with two values

-   The value you pass will be what the state's value starts as
-   Index 0 in the array is the current value for the state
-   Index 1 in the array is the function to update the state

Since `useState()` returns an array, we can easily save each value into variables using destructuring

-   These can be named absolutely anything!
-   Convention says to name the second variable `set`-FirstVariable

```js
const [input, setInput] = useState('Please provide a phone number');
const [maxNumPassengers, setMaxNumPassengers] = useState(80);
```

The state value should never be directly changed.

Instead, use the update function to change the state's value

```js
import { useState } from 'react';

const EatFruit = () => {
    const [numFruits, setNumFruits] = useState(10);

    return (
		// Pretend there's JSX here that lets a user eat an apple

		...
		// BAD CODE DON'T DO THIS
		numFruits = numFruits - 1

		...
		// Correctly changing state
		setNumFruits(numFruits - 1)
	)
};
```

## `useEffect()`

Handles anything you want to happen after a rerender occurs, particularly useful for side effects

### Quick Refresher

Pure functions have no side effects.

Side effects are changes to things outside of the function being run

```js
let myNumber = 5;

// Pure function
const pure = (num) => {
    return num + 5;
};

pure(myNumber); // 10
console.log(myNumber); // 5

// Function causing a side effect

const impure = () => {
    myNumber += 5;
    return myNumber;
};

impure(); // 10
console.log(myNumber); // 10
```

`useEffect` takes two arguments, a callback function and a dependency array
