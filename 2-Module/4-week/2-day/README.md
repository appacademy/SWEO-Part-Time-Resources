# M2W4D2

## Linked List Practice Part 1 (30 Min)

## Lecture Part 1

### Linked List Instance

Linked Lists are data structures that represent a linear sequence of "vertices"
(or nodes) and track three important properties:

- head: first node in the list
- tail: last node in the list
- count: number of nodes in the list

### Node Instance

Each individual instance of a node tracks some other important properties as
well:

- value: value represented by the node
- next: the next node in the list
- previous: the previous node in the list

### Linked Lists and Node Instances Working Together

- In order to implement a Linked List, you MUST implement the Node class as well
as the LinkedList class.
- The actual data lives in the node instances

### Linked Lists vs Arrays

Linked Lists contain ORDERED DATA, similar to arrays. While they exhibit some
very similar traits, the difference is how data is stored.

- Arrays store data in a contiguous manner:

  - each element is stored next to it's neighboring element in a single block of
    memory.

- Linked Lists, elements arestored non-contiguously:

  - They are randomly dispersed around your computer. Even though elements are
      stored randomly, because each node has a previous and a next property, we
       are ble to retrieve neighboring elements easily.

  - A Linked List has NO INDICES and it is not possible to look up individual
  nodes in constant time. In order to find a node, we must iterate over the
  entire list until we find our target node.

## Linked List Practice Part 2 (20 Min)

### Linked List Types

| List Type         | Description                                                                                                   | Direction                        |
|-------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------|
| Singly Linked     | Nodes have a single pointer connecting                                                                        | Head→Tail                        |
| Doubly Linked     | Nodes have two pointers connecting them bi-directionally.                                                     | Head⇄Tail                        |
| Multiply Linked   | Nodes have two or more pointers, providing a variety of potential node orderings.                             | Head⇄Tail, A→Z, Jan-Dec, etc.A→Z |
| Circularly Linked | Final node's next pointer points to the first node, creating a non-linear, circular version of a Linked List. | Head→Tail→Head→Tail              |

### Linked List Methods

- addToTail: Adds a new node to the end of the list.
- addToHead: Adds a new node to the front of the list.
- insertAt: Adds a new node at the specified position (we need to traverse to
that point, then update pointers)
- removeTail: Removes the last node of the list.
- removeHead: Removes the first node of the list.
- removeFrom: Removes the node at the specified position.
- contains: Traverses the list and returns a boolean to indicate if the value
was found at any node.
- get: Returns a reference to the node at the specified position.
- set: Updates the value of the node at the specified position.
- size: Returns the current length of the list.

#### Time Complexity of Linked List Methods

- Accessing a node:
- Searching a list:
- Inserting a value:
- Deleting a node:

## Linked list Practice Part 3 (15 min)

## Lecture Part 3

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

- Queues: FIFO (First In, First Out) data structures.
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

## Implement a Queue using an Array (10 Min)

Should have these methods:

- size
- enqueue
- dequeue
- peek

## Linked List Practice for Wedensday (3 Hours)

## Bonus

Implement a queue using a linked list and make sure to test it!
