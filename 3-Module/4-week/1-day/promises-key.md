# Promises
- A Promise in JavaScript is a commitment that sometime in the future, our code will get a value from some operation. A Promise at its core is just an OBJECT.
- Another alternative to handling async operations without dealing with callback nesting (callback hell) to get sync behaviors.
  - I.e. running another setTimeout only after the first one is executed (requires nesting another setTimeout within the first setTimeout's callback)

## Promises allow us to
- promises are really great to handle something that takes really long in the background, 
  - like dowloading a high quality image from a different server,
  - reading a file from a server,
  - or reading user input since we might not know "when" it will be done. 

- handle async code and write manageable code that deals with asynchronous operation
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
- rejected : a promise that is fails to complete
- pending : a promise that is not yet resolved nor rejected

---
**Key functional notes**
- A promise can only succeed or fail once: callbacks will not be invoked multiple times.
- A promise cannot change its state from fulfilled to rejected or vice-versa
- A promise is a JavaScript Class and has methods, ie .then()

---

## Creating your own promises and Handling Promises
- Creating using `promise constructor` --> `new Promise(executorFunc)`
- Handling promise with `then` and `catch` chaining
- most times you will be working and handling a promise that is RETURNED from a function, some operation, or other libraries. (i.e. JS `fetch api`)

