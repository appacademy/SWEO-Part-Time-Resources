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
	const newHead = new DoublyLinkedListNode(val)
	if(!this.head) {
		this.head = newHead
		this.tail = newHead
	} else {
		newHead.next = this.head
		this.head.prev = newHead
	}
	this.head = newHead;
	this.length++
  } // time o(1)

  addToTail(val) {
	const newTail = new DoublyLinkedListNode(val)
	if(!this.tail){
		this.head = newTail
	} else {
		this.tail.next = newTail
		newTail.prev = this.tail
	}
	this.tail = newTail
	this.length++
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
