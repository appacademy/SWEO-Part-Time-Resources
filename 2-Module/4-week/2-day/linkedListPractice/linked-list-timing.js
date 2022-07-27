const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const ll = new LinkedList();
const dl = new DoublyLinkedList();

addToHead = (list, n) => {
  for (let i = 0; i < n; i++){ // O(n)
    list.addToHead(i) // both ll and dl = O(1)
  } // overall both ll and dl = O(n)
}

addToTail = (list, n) => {
  for (let i = 0; i < n; i++){ // O(n)
    list.addToTail(i) // ll = O(n) / dl = O(1)
  } // overall ll = O(n^2) / dl = O(n)
}

console.time('LL Add to Head')
addToHead(ll, 100000); // O(n) time
console.timeEnd('LL Add to Head')

console.time('DL Add to Head')
addToHead(dl, 100000); // O(n) time
console.timeEnd('DL Add to Head')

console.time('LL Add to Tail')
addToTail(ll, 100000); // O(n^2) time
console.timeEnd('LL Add to Tail')

console.time('DL Add to Tail')
addToTail(dl, 100000); // O(n)
console.timeEnd('DL Add to Tail')