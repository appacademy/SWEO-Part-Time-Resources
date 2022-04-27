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

  // big o space o(1) and time o(1)
  addToHead(val) {

    let newNode = new DoublyLinkedListNode(val); // space o(1)

    if (this.head) {
        this.head.prev = newNode;
        newNode.next = this.head;
    } else {
        this.tail = newNode;
    }

    this.head = newNode;
    this.length++;
  }

  // big o space o(1) and time o(1)
  addToTail(val) {
    const node = new DoublyLinkedListNode(val);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      // this.tail.next = node;
      // node.prev = this.tail;
      // this.tail = node;
      [this.tail.next, node.prev, this.tail] = [node, this.tail, node];
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
