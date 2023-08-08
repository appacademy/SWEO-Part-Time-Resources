// linked list

// they use more memory vs an array
// they are more efficient in using that memory
// insertion is constant o(1) for both the end of the list and beginning
// deletion is constant o(1) for both the end of the list and beginning
// is not a contiguous block of memory

// linked list uses a class

// singly linked list -> only points to the next node
// doubly linked list -> points back to the previous node and the next node

// advanced data structure
// circular linked list -> is a node that points to the tail and the tail can point back to the head

// node is an instance of a list

// inserting node or deleting node in a linked list is always o(n) if its not the head or tail
// recursive or iterative is the only way to do so


// singly cause it only has one pointer to the next node

class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null; // 4-8 bytes
	}

	insertNode(){}
	deleteNode(){}
	addToTail(){}
	addToHead(){}
	deleteFromHead(){}
	deleteFromTail(){}
	search(){}
}

class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

const ll = new LinkedList();

const newNode1 = new Node(1);
ll.head = newNode1
const newNode2 = new Node(2)
newNode1.next = newNode2
const newNode3 = new Node(3)
newNode2.next = newNode3
const newNode4 = new Node(4)
newNode3.next = newNode4

ll.tail = newNode4

const helloNode = new Node('hello')



helloNode.next = ll.head
ll.head = helloNode

const newTail = new Node('World')

ll.tail.next = newTail
ll.tail = newTail


ll.head = ll.head.next

// ll.head = ll.head.next
// ll.head = ll.head.next
// ll.head = ll.head.next
// ll.head = ll.head.next
// console.log(ll)

// console.log(newNode1.next)
// console.log(ll.head.next.next.next)

ll.tail = ll.head.next.next.next
ll.tail.next = null

// ll.tail = null
// console.log(ll)

// inserting to the head o(1)
// inserting to the tail o(1)

// deleting from the head o(1)
// deleting from the tail is o(n)

// inserting inbetween is o(n)
// deleting inbetween is o(n)

// searching head or tail is o(1)
// searching inbetween is o(n)


// doubly linked list has two pointers the previous and next

class DoublyNode{
	constructor(value){
		this.value = value
		this.next = null
		this.previous = null
	}
}

const doubleLL = new LinkedList()
const newDN1 = new DoublyNode('a')
const newDN2 = new DoublyNode('b')
const newDN3 = new DoublyNode('c')

doubleLL.head = newDN1
doubleLL.tail = newDN3

newDN1.next = newDN2
newDN2.previous = newDN1
newDN2.next = newDN3
newDN3.previous = newDN2

// doubly linked list
// inserting to the head o(1)
// inserting to the tail o(1)

// deleting from the head o(1)
// deleting from the tail is o(1)

// inserting inbetween is o(n)
// deleting inbetween is o(n)

// searching head or tail is o(1)
// searching inbetween is o(n)

// with a doubly linked list you can start from the tail


