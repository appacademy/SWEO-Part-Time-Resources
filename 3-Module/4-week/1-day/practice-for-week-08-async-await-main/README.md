# Practice: Async/Await

In this practice, you will work on handling `Promise`s with `async`/`await`.

## Set up

Clone the project from the [starter].

## Phase 1: Async Workout

For this phase, refactor the `workout` function in **phase-1.js** to use
`async`/`await` instead of the Promise chain (`.then`).

The `workout` function runs the given functions in a way that ensures you begin
running on the treadmill after you're finished stretching, you begin lifting
weights after you've finished running on the treadmill. Print
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

## Phase 2: Async Effective Workout

For this phase, refactor the `workout` function in **phase-2.js** to use
`async`/`await` instead of the Promise chain (`.then`). **You are not
expected to complete this now. This is phase should be used for additional
promise practice in studying for the assessment.**

### Test again

Comment in each invocation of the workout function listed at the bottom
and run the file (`node phase-2.js`) to see if you get the expected output.

[starter]: https://github.com/appacademy/practice-for-week-08-async-await