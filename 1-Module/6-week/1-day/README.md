# M1W6D1

## Node/Readline

### Node Runtime Environment

- Node is a runtime for JavaScript that runs on servers/computers with
**full user-level system access**.

- This is in contrast to JavaScript in the browser which is sandboxed for
  security reasons(so webpages cannot do anything malicious on your system).

- This allows us to write software that runs natively on your computer such as a
  desktop app or server for a web app. Utilities such as readline which interact
  with the file system can only be utilized in node, not the browser.

### Callbacks and the Event Loop

- Callbacks allow us to write asynchronous code freeing up the main threads
  call stack to perform other tasks as we are waiting for some sort of input.

- In our below code we are using callbacks to pass a function to another
 function to be executed once we have user input. While we are waiting for the
 user input, the main thread of execution is freed up to perform other tasks.

```js
// import the readline module into our file
const readline = require('readline')

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const answers = {}

// ask the user a question
// Main thread is freed up while we wait for user input. HandleResponeOne will
// be executed when the user has submitted their response.

rl.question("What's up, doc? ", handleResponseOne)

// first calback
function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + ' is up.')
  // save firstAnswer to answer object
  answers['up'] = firstAnswer
  rl.question("What's down, clown? ", handleResponseTwo)
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + ' is down.')
  answers['down'] = secondAnswer
  rl.question("What's left, Jeff? ", handleResponseThree)
}

// third callback (passed to `rl.question()` in handleResponseTwo)
function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + ' is left.')
  answers['left'] = thirdAnswer
  // close the interface
  rl.close()
  console.log(answers)
}
```

---

JavaScript is a single threaded language that can be non-blocking.

## Threading

![threading-image](./threading.png)
_JavaScript is Single Threaded_

In a single-threaded environment, only one command can be processed at a time.

In a multi-threaded environment, multiple commands can be processed at the same
time.

## Event Loop

### Call Stack: Last In First Out - (LIFO)

- The call stack is the structure used in the JavaScript runtime to track the execution of function calls.
- We call the items placed onto the call stack `stack frames`
- When a function is called, a new frame is pushed onto the stack.
- When a function evaluates, the frame on the top of the stack is popped off the stack.

### Message Queue: First In First Out - (FIFO)

- Exists to track the handling of events.
- New items are added to the back of the line (enqueue).
- Items are removed from the front of the line (dequeue).
- Async code that is called in your program, is handed over to the runtime,
  allowing your program to continue running its synchronous code.
- When the runtime resolves the async code, it enqueues a message to the message
  queue.
- When the call stack finishes its last stack frame, the next message is dequeued, added to the call stack, and processed.

## Sync vs. Async

- **Sync**: If code is synchronous, that means that there is an inherent order among the commands and this order of execution is guaranteed.
- **Async**: If code is asynchronous, that means that there is no guarantee in the total order that commands are executed. Asynchronous is the opposite of synchronous.

```js
// --------------- Problem 1 ---------------------------
console.log('one');
console.log('two');
console.log('three');

// --------------- Problem 2 ---------------------------
const foo = () => {
    console.log('two');
};

console.log('one');
foo();
console.log('three');

// --------------- Problem 3 ---------------------------
console.log('one');

setTimeout(() => {
    console.log('two');
}, 1500);

console.log('three');
```

## SetTimeout

```js
// --------------- Problem 1 ---------------------------
setTimeout(() => {
    console.log('time is up');
}, 1000);

console.log('end');

// --------------- Problem 2 ---------------------------
const foo = (a, b) => {
    console.log('time is up');
    console.log(`${a} ${b}`);
}

setTimeout(foo, 1000, 'potato', 'tomato');

console.log('end');

// --------------- Problem 3 ---------------------------
const foo = (a, b) => {
    console.log('time is up');
    console.log(`${a} ${b}`);
}

const res = setTimeout(foo, 1000, 'potato', 'tomato');
clearTimeout(res);
```

## SetInterval

```js
// --------------- Problem 1 ---------------------------
const foo = (a, b) => {
    console.log('time is up');
    console.log(`${a} ${b}`);
}

setInterval(foo, 1000, 'potato', 'tomato');

// --------------- Problem 2 ---------------------------
const foo = (a, b) => {
    console.log('time is up');
    console.log(`${a} ${b}`);
}

const interval = setInterval(foo, 1000, 'potato', 'tomato');
clearInterval(interval);

// --------------- Problem 3 ---------------------------
const intervalCount = (count, delay) => {
    const intervalObj = setInterval(() => {
        console.log('time is up');
        count--;

        if (count === 0) {
            clearInterval(intervalObj);
        }
    }, delay);
}

intervalCount(3, 500);
```
