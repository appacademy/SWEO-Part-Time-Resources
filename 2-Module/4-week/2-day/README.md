# M2W4D2

## Linked Lists

Linked Lists are data structures that represent a linear sequence of "nodes"
(or vertices) and track three important properties:

- head: first node in the list
- tail: last node in the list
- count: number of nodes in the list

---

## Node Instance

Each individual instance of a node tracks some other important properties as
well:

- value: value represented by the node
- next: the next node in the list
- previous: the previous node in the list

---

## Linked Lists and Node Instances Working Together

- In order to implement a Linked List, you MUST implement the Node class as well
  as the LinkedList class.
- The actual data lives in the node instances

---

## Linked Lists vs Arrays

Linked Lists contain ORDERED DATA, similar to arrays. While they exhibit some
very similar traits, the difference is how data is stored.

- Arrays store data in a contiguous manner:

  - each element is stored next to it's neighboring element in a single block of
    memory.

- Linked Lists, elements are stored non-contiguously:

  - They are randomly dispersed around your computer. Even though elements are
    stored randomly, because each node has a previous and a next property, we
    are able to retrieve neighboring elements easily.

  - A Linked List has NO INDICES and it is not possible to look up individual
    nodes in constant time. In order to find a node, we must iterate over the
    entire list until we find our target node.

---

### Adding And Removing From A Linked List

- addToHead: Adds a new node to the front of the list. - O(1)
- removeHead: Removes the first node of the list. - O(1)

## Linked List Types

| List Type         | Description                                                                                                   | Direction                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Singly Linked     | Nodes have a single pointer connecting                                                                        | Head→Tail                     |
| Doubly Linked     | Nodes have two pointers connecting them bi-directionally.                                                     | Head⇄Tail                     |
| Multi Linked   | Nodes have two or more pointers, providing a variety of potential node orderings.                             | Head⇄Tail, A→Z, Jan-Dec, etc. |
| Circularly Linked | Final node's next pointer points to the first node, creating a non-linear, circular version of a Linked List. | Head→Tail→Head→Tail           |

## Linked List Methods

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
