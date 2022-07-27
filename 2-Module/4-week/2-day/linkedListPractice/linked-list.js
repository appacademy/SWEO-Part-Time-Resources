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
    // create new node
    // set the new node .next property to be the current head
    // set this.head to be our new node
    // increment this.length
    // newNode = 0
    // list = 1 -> 2 -> 3
    // list = 0 -> 1 -> 2 -> 3
    
    const newNode = new LinkedListNode(val)

    if (this.head){ // this conditional is not necessary in this situation since our this.head is initialized to null, 
      // but I included it to help show why we are doing this step.
      newNode.next = this.head; // important to do this step before reassigning our this.head to be our new node
      // so that we don't lose our reference to the previous head.
    }

    this.head = newNode; // reassign our this.head to be the new node
    this.length++;
  }

  addToTail(val) {
    // create a new node
    // traverse the list until we find a node with a null .next property
    // set that nodes .next to be our new node with a null .next property
    // example:
    // newNode = 4
    // list = 1 -> 2 -> 3
    // i have to traverse the list to find the 3
    // create a var 'current' and set it to this.head
    // current = 1 on the first iteration.
    // while the current node has a this.next property that is NOT null I want to reassign current to be the
    // next in the list.
    // 1.next = 2
    // 2.next = 3
    // 3.next = null because its the tail
    // while (current.next) // means while .next property is truthy
    // want to reassing my current to be the next one in line.
    // after the loop breaks, current is 3, set 3.next to be the newNode
    // now the list = 1 -> 2 -> 3 -> 4

    const newNode = new LinkedListNode(val)

    if (!this.head){
      this.head = newNode;
    } else {
      let current = this.head; // should stop at the tail because .next will be null
      while (current.next){ // while current.next is truthy
        current = current.next; // set my current to be the next one
      }
      current.next = newNode; // set .next of current to be new node, making it the tail.
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