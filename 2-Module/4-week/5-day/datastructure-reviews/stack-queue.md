## Stack & Queues

Stacks and queues both represent a linear collection of nodes or values, and in
that way are similar to linked lists. Stacks and queues are also somewhat
similar to each other, but differ in the order that nodes can be added or
removed.

- Stacks: LIFO (Last In, First Out) data structures.
  - the last Node added is always the first Node to be removed
  - the first Node added is always the last Node to be removed
- It is helpful to visualize a stack as a vertical stack of items.

  - we add to the top of the stack. We remove from the top of the stack.

- Queues: FIFO (First In, First Out) or LILO (Last in, Last out) data structures.
  - the first Node added is the first Node to be removed
- It is helpful to visualize a queue as a line of people waiting to get in somewhere
  - people add themselves to the back of the line and exit at the front

## Tradeoffs

- Is a linked list queue worth coding out when working with small n's (< 1000)?
  - Array implementation may work for what you need; easier to read code
  - Evaluate _readability, maintainability_ and _simplicity costs_

### Implement a Stack using an Array

```js
class Stack {
  constructor() {
    this.store = new Array();
  }
  size() {
    //return the length of the stack
    return this.store.length;
  }

  push(ele) {
    //this will add element to end of stack
    this.store.push(ele);
    return true;
  }

  pop() {
    //remove the last element
    return this.store.pop();
  }

  peek() {
    //return the last element
    return this.store[this.store.length - 1];
  }
}
```