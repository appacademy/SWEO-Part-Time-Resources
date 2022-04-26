// linked list
// pointers
// nodes = elements


// singly linked list

class LinkedList {
	constructor(){
		this.head = null; // pointers
		this.tail = null; // pointers
	}

	addNode(value){
		const newNode = new Node(value) //
		const currentTail = this.tail
		currentTail.next = newNode
		this.tail = newNode
	}
}


class Node {
	constructor(value){
		this.value = value;
		this.next = null; // pointers
	}
}

const ll = new LinkedList(); // data structure, LinkedList { head: null, tail: null }

const node1 = new Node(1); // Node { value: 1, next: null }
const node2 = new Node(2); // Node { value: 2, next: null }
const node3 = new Node(3); // Node { value: 3, next: null }

ll.head = node1

// console.log(ll) // LinkedList { head: Node { value: 1, next: null }, tail: null }

node1.next = node2

console.log(node1) // Node { value: 1, next: Node { value: 2, next: null } }

ll.tail = node2

// console.log(ll)

node2.next = node3

// console.log(node1)

ll.tail = node3

// console.log(ll)
// double linked list
// circular linked list

let currentNode = ll.head

// for(let i = 0; i < 3; i++){
// 	currentNode.value
// }
// console.log(currentNode)

ll.addNode(4)
ll.addNode(5)

ll.addNode(6)

ll.addNode(7)

ll.addNode(8)

ll.addNode(9)



console.log(ll)

while(currentNode){
	console.log(currentNode.value)
	// console.log(currentNode.next) //
	currentNode = currentNode.next
}
