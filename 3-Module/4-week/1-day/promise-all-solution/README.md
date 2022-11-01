# Practice: Promise.all

In this practice, you will refactor the code from Phase 1 of the Creating and
Handling Promises Practice.

## Set up

Clone the project from the [starter].

## Multi-task Activities Workout

In this phase, you will force the person working out to do a really intense
workout that involves multi-tasking. You want the person to start to stretch,
run on the treadmill, and lift weights all at the same time.

In Phase 1 of the Creating and Handling Promises Practice, the workout had each
of the activities done one after the other. Refactor the code in the `workout`
function so that **all the activities start at the same time**. When all of them
are fulfilled, print `"done working out"`.

Hint: Use `Promise.all` to execute code after all the promises are fulfilled.

Test your code by running the file in node (**node phase-1.js**). You should see
the following in your terminal printed out in this exact order:

```plaintext
done running on treadmill
done stretching
done lifting weights
done working out
```

[starter]: https://github.com/appacademy/practice-for-week-08-promise-all