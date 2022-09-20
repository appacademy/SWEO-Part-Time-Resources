
class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  addToTail(val) {
    // Your code here
  }

  // You can use this function to help debug
  print() {

    let current = this.head;

    while (current) {
      console.log(`${current.value} -> `);
      current = current.next;
    }
 
    console.log("NULL");
  }
}


module.exports = LinkedList;