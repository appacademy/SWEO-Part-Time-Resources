const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

// const ll = new LinkedList();

const dl = new DoublyLinkedList();

for(let i = 0; i < 1000; i++){
	dl.addToTail(i)
}
