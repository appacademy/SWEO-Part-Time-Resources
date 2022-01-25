# M2-W4-D2

## Warmup (20m)

Create a class which will act as a Stack data structure.

- It should follow the Last-In-First-Out (LIFO) rule.
- Use an array as the data layer of the stack.
- It should have a push method to add items to the stack.
- It should have a pop method to remove items from the stack.
- It should have a peek method to view the item on top of the stack, but not remove it.
- It should have a printAll method, that will log each item in the stack to the
  console.

```js
// Boilerplate Code

class Stack {
  constructor(){

  }

  push(){

  }

  pop(){

  }

  peek(){

  }

  printAll(){

  }
}
```

---

## Linked List Practice pt1 (20m)

---

## Discussion pt1

---

### Linked List Instance

Linked Lists are data structures that represent a linear sequence of "vertices" (or nodes) and track three important properties:

- head: first node in the list
- tail: last node in the list
- count: number of nodes in the list

---

### Node Instance

Each individual instance of a node tracks some other important properties as well:

- value: value represented by the node
- next: the next node in the list
- previous: the previous node in the list

---

### Linked Lists and Node Instances Working Together

In order to implement a Linked List, you MUST implement the Node class as well as the LinkedList class.
The actual data lives in the node instances

---

### Linked Lists vs Arrays

Linked Lists contain ORDERED DATA, similar to arrays. While they exhibit some very similar traits, the difference is how data is stored.

- Arrays store data in a contiguous manner:
  - each element is stored next to it's neighboring element in a single block of memory.
- Linked Lists, elements arestored non-contiguously:
  - They are randomly dispersed around your computer. Even though elements are stored randomly, because each node has a previous and a next property, we are ble to retrieve neighboring elements easily.
  - A Linked List has NO INDICES and it is not possible to look up individual nodes in constant time. In order to find a node, we must iterate over the entire list until we find our target node.

---

## Linked List Practice pt2 (20m)

---

## Discussion pt2

### Linked List Types

|ListType|Description|Direction|
|:--|:--|:--|
| Singly Linked | Nodes have a single pointer connecting | Head→Tail |
| Doubly Linked | Nodes have two pointers connecting them bi-directionally. | Head ⇄ Tail |
| Multiply Linked   | Nodes have two or more pointers, providing a variety of potential node orderings.| Head⇄Tail, A→Z, Jan-Dec, etc.A→Z |
| Circularly Linked | Final node's next pointer points to the first node, creating a non-linear, circular version of a Linked List. | Head→Tail→Head→Tail|

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

---

## Linked List Practice pt3 (20m)

---

## Discussion pt3

### Time Complexity

- addToHead: O(1)
- Any Traversal Method (i.e. print, search): O(n)
- addToTail: With tail pointer O(1), Without tail pointer O(n).
  - What's the tradeoff?
- removeFromHead: O(1)
- removeFromTail: Singly Linked List O(n), Doubly Linked List O(1).
  - What's the tradeoff?

---

## Queue Implementation w/Array (if time allows)

Should have these methods:

- size
- enqueue
- dequeue
- peek

```js
//Boilerplate Code

class Queue {
  constructor(){

  }

  enqueue(){

  }

  dequeue(){

  }

  peek(){

  }

  size(){

  }
}
```
