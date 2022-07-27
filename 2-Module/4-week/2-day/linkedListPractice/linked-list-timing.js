const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const ll = new LinkedList();
const dl = new DoublyLinkedList();

const addToHead = (list, n) => {
  for (let i = 0; i < n; i++){ // O(n)
    list.addToHead(i); // O(1)
  }
}

const addToTail = (list, n) => {
  for (let i = 0; i < n; i++){ // O(n)
    list.addToTail(i); // ll = O(n) dl = O(1)
  }
}

console.time('ll add to head')
addToHead(ll, 100000); // O(n)
console.timeEnd('ll add to head')
console.time('dl add to head')
addToHead(dl, 100000) // O(n)
console.timeEnd('dl add to head')
console.time('ll add to tail')
addToTail(ll, 100000) // O(n^2)
console.timeEnd('ll add to tail')
console.time('dl add to tail')
addToTail(dl, 100000) // O(n)
console.timeEnd('dl add to tail')
