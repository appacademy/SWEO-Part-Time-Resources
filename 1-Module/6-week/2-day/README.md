# W6D2

## Async (30m)

### Threading

JavaScript is a single threaded language that can be non-blocking.

![threading image](./threading.png)

In a single-threaded environment, only one command can be processed at a time.

In a multi-threaded environment, multiple commands can be processed at the same
time.

---

### Event Loop

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

---

### Sync vs. Async

- **Sync**: If code is synchronous, that means that there is an inherent order among the commands and this order of execution is guaranteed.
- **Async**: If code is asynchronous, that means that there is no guarantee in
  the total order that commands are executed. Asynchronous is the opposite of
  synchronous.

---

## Project pt 1 (1h)

Problems 0-4

---

## Discussion 1 (15m)

setTimeout Walkthrough

---

## Project pt 2 (1h)

Problems 5-7

---

## Discussion 2 (15m)

setInterval Walkthrough

---
