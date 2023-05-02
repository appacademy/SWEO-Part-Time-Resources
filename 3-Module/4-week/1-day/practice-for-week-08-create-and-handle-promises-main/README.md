# Practice: Create and Handle Promises

In this practice, you will work on creating and handling `Promise`s.

## Set up

Clone the project from the [starter].

## Phase 1: Workout

Implement the code in **phase-1.js**.

### `stretch`

Write a function called `stretch`. It should:

- return a promise
- fulfill the promise after 1 second
- print `"done stretching"` once the promise is fulfilled

### `runOnTreadmill`

Write a function called `runOnTreadmill`. It should:

- return a promise
- fulfill the promise after 0.5 seconds
- print `"done running on treadmill"` once the promise is fulfilled

### `liftWeights`

Write a function called `liftWeights`. It should:

- return a promise
- fulfill the promise after 2 seconds
- print `"done lifting weights"` once the promise is fulfilled

### `workout`

Write a function called `workout` that runs the above functions in a way
that ensures you begin running on the treadmill after you've finished
stretching. Begin lifting weights after running on the treadmill. Print
`"done working out"` after you've finished lifting weights.

### Test your code

Run the file (`node phase-1.js`) and check your output against the expected
output. `workout()` should print out the following output to the terminal:

```plaintext
done stretching
done running on treadmill
done lifting weights
done working out
```

## Phase 2: Effective Workout

In Phase 2, you will improve upon phase 1 in **phase-2.js**. **You are not
expected to complete this now. This is phase should be used for additional
promise practice in studying for the assessment.**

Adjust your `workout` function so that it takes in a specific amount of time
that you have available for the entire `workout`

Given the following new rules, have each promise resolve with the amount of time
left by decrementing each action by its specific amount of time

New Rules:

1. you must stretch for 1 second
2. you must run on treadmill for 0.5 seconds
3. you must lift weights for 2 seconds

If the time needed to complete the current action exceeds the amount of time
left, reject the promise and provide a reason.

For example, working out for 500 milliseconds should print an error because
if you only have 0.5 seconds to workout, you won't have enough time to even
stretch.

```js
workout(500);
  // should print out the following:
    // "Error: you dont have enough time to stretch"
```

But if you work out for 1000 milliseconds, it should print out that you finished
stretching, but you don't have enough time to run on the treadmill.

```js
workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill
```

### Test each function

Comment in each invocation of the workout function listed at the bottom
and run the file (`node phase-2.js`) to see if you get the expected output.

[starter]: https://github.com/appacademy/practice-for-week-08-create-and-handle-promises