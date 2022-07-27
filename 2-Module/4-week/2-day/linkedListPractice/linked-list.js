class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // create a new node
    // if there is a head already, make it the .next of my new node
    // set this.head to be my new node
    // increment the length

    const newNode = new LinkedListNode(val);

    if (this.head){
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // create a new node
    // set our new node to be the .next of the current tail
    // increment length
    const newNode = new LinkedListNode(val);
    if (!this.head){
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

// let linkedList = new LinkedList();

// linkedList.addToTail(1);
// linkedList.addToTail(2);
// linkedList.addToTail(3);

// linkedList.print();

module.exports = LinkedList;