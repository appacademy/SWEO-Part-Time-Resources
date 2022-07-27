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
    // create a new node
    // if there is no head, this.tail = new node
    // else set the current this.head.prev = new node
    // set our new node.next to be the current head
    // set our this.head = new node
    // increment our length
    const newNode = new DoublyLinkedListNode(val);
    if (!this.head){
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // create a new node
    // if there's no this.head set it to be our new node
    // else update the current tail.next to be our new node
    // update our new nodes .prev to be the current tail
    // update our length;
    
    // example:
    // newNode = 4;
    // current list = 1 -> 2 -> 3
    // 1 -> 2 -> 3 next is 4 -> 4 previous is 3

    const newNode = new DoublyLinkedListNode(val);
    if (!this.head){
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
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