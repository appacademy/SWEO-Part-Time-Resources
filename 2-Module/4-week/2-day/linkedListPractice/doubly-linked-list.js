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
    // create a node
    // if there is no this.head, this.tail = new node
    // set the .next of our newNode to be our current head
    // set the .prev of our current head to be our new Node
    // increment the length
    // list = 1 -> 2 -> 3
    // newNode = 0
    // list = 0 -> 1 -> 2 -> 3

    const newNode = new DoublyLinkedListNode(val);

    if (!this.head){
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // create a new node
    // if no this.head, this.head = newNode
    // set the .next of this.tail to be the new node
    // set the .prev of the new node to be this.tail
    // set this.tail to be our new node
    // increment the length
    // list = 1 -> 2 -> 3
    // newNode = 4
    // list = 1 -> 2 -> 3 -> 4
    const newNode = new DoublyLinkedListNode(val);

    if (!this.head){
      this.head = newNode
    } else { // this else case is actually adding the node to the list
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode; // this.tail is just a variable holding the last item for easy access
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