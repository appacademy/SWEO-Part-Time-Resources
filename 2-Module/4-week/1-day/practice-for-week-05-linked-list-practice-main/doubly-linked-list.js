class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
	this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
	let node = new DoublyLinkedListNode(val);
    if(this.head === null && this.tail === null){
      this.head = node;
      this.tail = node;
    }
    else{
		this.head.prev = node
		node.next = this.head
		this.head = node
    }
    this.length++;
  } // time o(1)

  addToTail(val) {
	let node = new DoublyLinkedListNode(val);
    if(this.head === null && this.tail === null){
      this.head = node;
      this.tail = node;
    }
    else{
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  } // time o(1)

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
