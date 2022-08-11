# Exploring Promises Long Practice

Now it is time for you to get your hands dirty and lock in the concept of
`Promise`s by creating your own functions and handlers. Specifically, you will
explore `await`, `async`, the `Promise` class, `then`, and `catch`.

## Set up

Clone the project from the [starter].

Implement the code in the given __promises.js__ file.

## Additional resources

While these instructions should guide you through this experimentation, you may
find you want some additional information or another look at the topics as you
work. If so, feel free to come back to these links at the time you need them.

* [async-await]
* [resolve-reject]

Go for it! You got this!!!

## Phase 1: `async`

In your file, create two similar functions. Each can return a number or string.
Before the second function, place the `async` keyword. Use the console to log
the calls to both functions.

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
function num1() {
    return 1;
}
async function num2() {
    return 2;
}

console.log('num1', num1());
console.log('num2', num2());
```

**Before continuing, what do you expect to happen when you run your code?**

Run your program by using the command `node promises.js` and compare what
actually happened to what you expected happen.

Notice that the "plain" function just returns the value and the `async` function
returns a `Promise`. Now add another call to the `async` function and attach the
`.then` function to get its result and log it.

```javascript
num2().then(result => console.log(result));
```

Run your program again and now you will see the plain number returned from the
second function.

> What have you learned so far?

Whenever the `async` keyword is used, the function automatically returns a
`Promise` and the value after the `return` keyword in the `async` function is
the resolved value of that returned `Promise`. Wow! Before continuing onto the
next phase, make sure you understand this concept. Ask an instructor to guide
you through this concept if you are still having trouble understanding it after
5 minutes.

## Phase 2: `await`

Next, create another `async` function. Declare a constant that `await`s the call
to your other `async` function in phase 1 and logs the value. Make sure you
remember to call your new function so it will run (since functions are only
stored, but not run, when defined).

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
async function waiting() {
    const value = await num2();
    console.log('waiting', value);
}
waiting();
```

**Before continuing, what do you expect to happen when you run your code?**

Run your program again and compare what actually happened to what you expected
happen.

Remember, `await` stops all flow until the promise returns. Of course, it is
very quick in this example, since there's no delay caused by file reading or
writing, web server calls, timeouts or anything else.

## Phase 3: DIY `Promise`

Now, it's time to create your own, custom `Promise` so that you can have some
delay before the promise is **resolved**. If you'd like to use `await` again,
then you will need to wrap your experiment in a function (and call it).

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 1000)
    });

    const result = await promise;
    console.log('my promise is', result);
}
waitForMyPromise();
```

**Before continuing, what do you expect to happen when you run your code?**

Run your program again and compare what actually happened to what you expected
happen.

## Phase 4: And `then`

As an alternative, you could also use `then` to wait for a promise; even a
custom one. For example, you can create another `new Promise` and attach
`.then()` to it.

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!');
    }, 1500)
}).then(r => console.log('then my other promise is', r));
```

**Before continuing, what do you expect to happen when you run your code?**

Run your program again and compare what actually happened to what you expected
happen.

How does the order of the output for the code in this phase compare with the
order of the output for the previous phase? The order should depend on the
timing you set for the `setTimeout`s in each function. Feel free to experiment
with different timeout values to change the order.

## Phase 5: About `setTimeout`

As you can see, `setTimeout` does not follow the `Promise` pattern. However,
you could create your own `wait` function to remedy this. In phase 1, you
discovered that an `async` function returns a `Promise`.

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

**Before continuing, in what situations would you want to use the `wait`
function?**

You would want to use the `wait` function to execute code after the `Promise`
returned from the function is fulfilled. The `wait` function wraps the
asynchronous `setTimeout` in a `Promise`.

Try using the `wait` function. Create another function that, when invoked, will
trigger a two-second pause caused by the `wait` function and will display a
message after the two-second pause.

## Phase 6: `reject` ... `catch`

Next, you should explore the negative side of `async` calls and `Promise`s for
those times they are unable to do what they were asked to do. In other words,
the `Promise` triggers `reject` instead of `resolve`.

Start by creating yourself a function that returns a `Promise`. Give it one
argument that is a random value, and use that value to determine if the
`Promise` is successful (`resolve`) or unsuccessful (`reject`).

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});
```

**Before continuing, what do you expect to happen when this function is
invoked with `1` as an argument for the `random` parameter? What about `0`?**

In order to test this, you may want to use a loop (e.g. `for` loop) to call it
several times, and hopefully see both success and failure. For your first
experiment, use `.then()` and `.catch()` to handle the two cases. Use the `wait`
function you created above in a chain with the random promise.

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
for (let i = 1; i < 10; i++) {
    const random = Math.random();
    wait(2000 + random * 1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error));
}
```

**Before continuing, what do you expect to happen when you run this code?**

In this example, the `wait` is a minimum of 2 seconds and a maximum of 3 seconds.
That is because `Math.random()` returns a value between 0 and 1. This choice was
made so the new messages will appear after the other experiments. Of course, you
can adjust the timeouts anyway you'd like!

Because the same random number is used with the wait and the random promise, the
output should show all the errors before the successes (in random numeric
order). **Confirm this behavior in the output of the code.**

## Phase 7: `try` ... `await` ... `catch`

The `await` approach to `Promise`s also works. Most developers find it easier to
read, so they will use it whenever possible (sometimes you just have to use
`.then()` and `.catch()`). It's really a personal or team choice most of the
time. Since you are exploring `Promise`s in this project, go ahead and create
a second version of the functionality above using the `await` approach.

First, remember that calls to `await` must be within an `async` function.
Second, realize that the `wait` `Promise` you create only returns successfully
and never returns a value, it is simple to call using
`await wait(<your timeout here>)`. Finally, when using `await` with a `Promise`
that calls `reject`, that wrapping the call in a `try` block will trigger the
`catch` block in the error case.

Here's an example of a possible `async` function.

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
const tryTryAgain = async (i) => {
    const random = Math.random();

    // no need for try-catch if there's no possibility of error (rarely happens)
    await wait(3000 + random * 1000);

    // usually you need to wrap the await to gracefully handle the error
    try {
        const result = await tryRandomPromise(random);
        console.log('random again #', i, result);
    } catch (error) {
        console.error('random again #', i, error);
    }
};
```

**Before continuing, what do you expect to happen when this function is
invoked with `1` as an argument for the `random` parameter? What about `0`?**

Finally, you can call your function in a `for` loop again if you'd like to see
a variety of results.

**Do not copy and paste this code! Write each line of code yourself.**

```javascript
for (let i = 1; i < 10; i++) {
    tryTryAgain(i);
}
```

**Before continuing, what do you expect to happen when you run this code?**

If all goes well, you should see the same output behavior as the `for` loop in
the previous phase.

## Phase 8: Appreciate asynchronous functions

In order to really appreciate the asynchronous nature of **Promises**, you may
add one additional `console.log` to the end of your file.

```javascript
console.log('END OF PROGRAM');
```

Before you run your program, you can challenge yourself to predict the order and
timing of the log messages (try to predict when "END OF PROGRAM" will be
logged). Also, feel free to rerun your program as many times as you'd like until
you feel like you fully understand why the order and timing happens as it does.

[starter]: https://github.com/appacademy/practice-for-week-08-exploring-promises-long-practice
[async-await]: https://javascript.info/async-await
[resolve-reject]: https://javascript.info/promise-api#promise-resolve-reject