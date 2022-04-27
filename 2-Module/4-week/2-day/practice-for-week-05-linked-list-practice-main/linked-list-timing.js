const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let ll = new LinkedList()
let dll = new DoublyLinkedList()

// big o linked list = time o(n)
function timer1(arr, list) {
  let startTime = Date.now()
  for (let i = 0; i < arr.length; i++) { // time o(n)
    const element = arr[i];
    list.addToHead(element) // ll time o(1), dl time o(1)
  }
  let endTime = Date.now()
  console.log(`${endTime - startTime}ms`)
}

// big o linked list = time o(n^2)
function timer2(arr, list) {

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
	let startTime = Date.now()
    list.addToTail(element) // ll time o(n), dl time o(1)
	let endTime = Date.now()
  	console.log(`${endTime - startTime}ms`)
  }

}

// let arr = ['batman', 42, 'banana', {bread : 'pumpernickel'},[1,7,8,16]]
let arr = new Array(40000)

// timer1(arr, ll)
// console.log('Linked List')
// timer2(arr, ll)
// console.log('Linked List')

timer1(arr, dll)
console.log('Doubly Linked List')
timer2(arr, dll)
console.log('Doubly Linked List')
