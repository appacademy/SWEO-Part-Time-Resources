// Linked List

// Utilizes pointers to connect to one data to another
// Allows to efficiently use memory
// It uses more memory than an array
// Dynamic storage of data

// singly linked list -> has a next pointer to the next node
// doubly linked list -> has a next pointer to
// the next node and a prev pointer to the previous node


// circular linked list

// node is an instance where we store our data

class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
	}
}

// queue -> first in first out

class singlyNode{
	constructor(value){
		this.data = value;
		this.next = null;
	}
}

// 1 -> 2 -> 3 -> 4

const sLL = new LinkedList()
// console.log(sLL)

const n1 = new singlyNode(1)
const n2 = new singlyNode(2)
const n3 = new singlyNode(3)
const n4 = new singlyNode(4)

sLL.head = n1
sLL.tail = n4

n1.next = n2
n2.next = n3
n3.next = n4
// console.log(n1)
// console.log(sLL)

const helloN = new singlyNode('hello')
helloN.next = sLL.head
sLL.head = helloN

// console.log(sLL)

const worldN = new singlyNode('world')
sLL.tail.next = worldN
sLL.tail = worldN

// inserting to the head o(1)
// inserting to the tail o(1)

// deleting from the head o(1)
// deleting from the tail o(n)

// console.log(sLL.head.next.next.next.next)

// const queue = [sLL.head]
// let currentNode = queue.pop()
// while(currentNode.next){
// 	// console.log('currentNode = ', currentNode.data)
// 	if(!currentNode.next) {
// 		sLL.tail = currentNode.next
// 		currentNode.next = null
// 	}
// 	else currentNode = currentNode.next
// }
// console.log('currentNode = ', currentNode.data)
sLL.head.next.next.next.next.next = null
sLL.tail = sLL.head.next.next.next.next
// sLL.head = sLL.head.next
// console.log(sLL)

const dlLL = new LinkedList()

class DoublyNode{
	constructor(value){
		this.data = value;
		this.prev = null; // 4-8 bytes
		this.next = null; // 4-8 bytes
	}
}

// a -> <-b-> <-c

const dlN1 = new DoublyNode('a')
const dlN2 = new DoublyNode('b')
const dlN3 = new DoublyNode('c')

dlLL.head = dlN1
dlLL.tail = dlN3

dlN1.next = dlN2
dlN2.prev = dlN1
dlN2.next = dlN3
dlN3.prev = dlN2

console.log(dlLL)


// inserting to the head o(1)
// inserting to the tail o(1)

// deleting from the head o(1)
// deleting from the tail o(1)

// shift o(n^2) -> array
// unshift o(n^2) -> array

// singly list inserting to head o(1)
// singly list removing from head o(1)

// singly list inserting to tail o(1)
