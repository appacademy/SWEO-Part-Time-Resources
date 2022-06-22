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
    //addToHead should create a newNode instance
    const newNode = new DoublyLinkedListNode(val);
    //0) edge case: if our this.head === null; then set this.head and this.tail to equal newNode
    if (this.head === null) {
      this.tail = newNode;
      this.head = newNode;
    }
    else {
      //first: link newNode.next = this.head
      newNode.next = this.head;

      //second: set this.head.prev = newNode (this.head.prev is now pointing to the new node)
      this.head.prev = newNode;

      //third: reassign this.head to its new head which is now newNode
      this.head = newNode;
    }

    this.length += 1;

  }

  addToTail(val) {
    const newNode = new DoublyLinkedListNode(val);
    //edge case: if this.head is initially null, set both head and tail to new Node
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      //1) newNode.prev should now point to this.tail (newNode.prev = this.tail)
      newNode.prev = this.tail
      //2) get the end of the tail (this.tail.next) and set it from null to adding the newNode in (this.tail.next = newNode)
      this.tail.next = newNode;

      //3) now take this.tail and reassign it to the new tail (newNode) now since we just added a newNode to the end of the tail
      this.tail = newNode;
    }
    this.length += 1;
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