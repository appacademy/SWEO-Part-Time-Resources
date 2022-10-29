# Learning Boost (5 Minutes)

# React Hooks

## What is a "hook" in React?

- A hook is just a function that is specifically made to access React features such as state.
- Hooks do what any function does, they reuse certains behaviors in our react components.
- Hooks control what happens when the page rerenders, such as the layout changing, the text/colors changing, etc.

# The useState hook

- The useState hook declares a state variable
- State variables persist through page rerenders, not refreshes, big difference.
- The argument you pass to the useState hook is the initial value of that state.
- In this example, we are making a state variable called count. The count variable keeps track of how many times a user is clicking on our button.
- States hold two values, the first value is the actual value of the state, the second is a function that updates that value.

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

# The useEffect hook

- useEffect is used to tell React to perform some behavior after the page renders.
- The first argument to useEffect is the function you want to run after each render.
- The second argument is an array of variables that React is "watching" for updates. Once one of these variables gets updated, the function you
passed into the useEffect will run.

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
