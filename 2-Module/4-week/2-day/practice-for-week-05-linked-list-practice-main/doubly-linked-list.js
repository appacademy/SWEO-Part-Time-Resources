class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // space o(1)
    this.tail = null;
    this.length = 0;
  }

  // time o(1)
  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val) // space o(1)
    if(this.head){
    	this.head.prev = newNode
    	newNode.next = this.head
    }else{
    	this.tail = newNode
    }
	this.head = newNode // reassigning
	this.length++
  }

  // time o(1)
  addToTail(val) {
	let node = new DoublyLinkedListNode(val); // space o(1)

    if (!this.tail) {
      	this.head = node;
      	this.tail = node;
    } else {
      	let prevTail = this.tail;
      	this.tail = node;
      	prevTail.next = this.tail;
      	node.prev = prevTail;
    }
    this.length++;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
