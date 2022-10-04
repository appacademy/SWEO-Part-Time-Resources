# `M3W4D2`

## Promises allow us to

- write async code in a sync manner
- write code that relies on the completion of async code
  - avoids callback hell

```js
const callbackHell = () => {
  setTimeout(() => {
    console.log("It's been 1 seconds");
    setTimeout(() => {
      console.log("It's been 2 seconds");
      setTimeout(() => {
        console.log("It's been 5 seconds");
      }, 3000);
    }, 1000);
  }, 1000);
};

callbackHell();
```

## A promise comes in one of three states

- resolved : a promise that has completed successfully
- rejected : a promise that has failed to complete
- pending : a promise that is not yet resolved nor rejected

---

### Key functional notes

- A promise can only succeed or fail once: callbacks will not be invoked multiple times

- A promise cannot change its state from fulfilled to rejected or vice-versa

- A promise is a JavaScript class and has methods, ie .then()

---

## Creating your own promises

If your async function does not automatically return a promise, like setTimeout/setInterval, you can use the promise constructor

Some async code, like fetch(), returns a promise by default. You would NOT use the promise constructor in that case

```js
const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

wait(1)
  .then(() => console.log("It's been 1 second"))
  .then(() => wait(1))
  .then(() => console.log("It's been 2 seconds"))
  .then(() => wait(3))
  .then(() => console.log("It's been 5 seconds"));
```

---

# Passing values through .then()

When chaining .then()'s together, you will often want to use the final value of
one promise in the next promise. Thankfully, this is super easy to do!

The resolve() and reject() functions will "return" whatever you pass to them.
The default argument for a .then() will be the return value of the previous
promise.

```js
const add5AfterPause = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 5);
    }, 1000);
  });
};

add5AfterPause(0).then((sum) => console.log(sum)); // 5
add5AfterPause(0)
  .then((nextNum) => add5AfterPause(nextNum))
  .then((sum) => console.log(sum)); // 10
```

---

Make sure to be mindful of return values! You might run into unexpected behavior
if you're not careful.

```js
add5AfterPause(0)
  // returns 5
  .then((nextNum) => add5AfterPause(nextNum))
  // nextNum = 5, returns 10
  .then((sum) => console.log(sum))
  // sum = 10, console.log() doesn't return anything (undefined)
  .then((anotherNum) => add5AfterPause(anotherNum))
  // anotherNum = undefined, returns NaN (undefined + 5 = NaN)
  .then((thisWontWork) => console.log(thisWontWork)); // NaN
```

---

We can fix this by simply opening up some curly bois

```js
add5AfterPause(0)
  .then((nextNum) => add5AfterPause(nextNum))
  .then((sum) => {
    console.log(sum); // 10
    return sum;
  })
  .then((anotherNum) => add5AfterPause(anotherNum))
  .then((thisWontWork) => console.log(thisWontWork)); // 15
```
