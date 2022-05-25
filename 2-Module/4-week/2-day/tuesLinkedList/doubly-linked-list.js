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
    let newNode = new DoublyLinkedListNode(val);

    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
    this.length++;

    // let newNode = new DoublyLinkedListNode(val);
    // if (!this.head) {
    //   this.tail = newNode;
    //   this.head = this.tail;
    // } else {
    //   this.head.prev = newNode;
    //   newNode.next = this.head;
    //   this.head = newNode;
    // }
    // this.length++;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;

    // if (!this.head) {
    //   this.addToHead(val);
    // } else {
    //   const newNode = new DoublyLinkedListNode(val);
    //   newNode.prev = this.tail;
    //   this.tail.next = newNode;
    //   this.tail = newNode;
    //   this.length++;
    // }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log('NULL');
  }
}

module.exports = DoublyLinkedList;
