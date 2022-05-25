const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let n = 100;

let ll = new LinkedList();
let dll = new DoublyLinkedList();

//!-----------------------------------------------------------------------------

// ll.addToHead => O(1) * for loop O(n) => O(n)
console.time('ll: addToHead');
for (let i = 0; i < n; i++) {
  ll.addToHead(i);
}
console.timeEnd('ll: addToHead');

//!-----------------------------------------------------------------------------

// ll.addToTail => O(n) * for loop O(n) => O(n^2)
ll = new LinkedList();
console.time('ll: addToTail');
for (let i = 0; i < n; i++) {
  ll.addToTail(i);
}
console.timeEnd('ll: addToTail');

//!-----------------------------------------------------------------------------

dll = new DoublyLinkedList();
console.time('dll: addToHead');
for (let i = 0; i < n; i++) {
  dll.addToHead(i);
}
console.timeEnd('dll: addToHead');

//!-----------------------------------------------------------------------------

dll = new DoublyLinkedList();
console.time('dll: addToTail');
for (let i = 0; i < n; i++) {
  dll.addToTail(i);
}
console.timeEnd('dll: addToTail');