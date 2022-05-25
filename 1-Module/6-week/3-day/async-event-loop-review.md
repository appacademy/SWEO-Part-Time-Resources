# Async/sync & Event Loop Review

## Event Loop Components

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

- **Sync (blocking)**: If code is synchronous, that means that there is an inherent order among the commands and this order of execution is guaranteed.
- **Async (non-blocking)**: If code is asynchronous, that means that there is no guarantee in the total order that commands are executed. Asynchronous is the opposite of synchronous.
- What is an example of async code that we've been working with all week?