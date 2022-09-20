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
    // Your code here
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

let linkedList = new LinkedList();
linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.addToHead(3);
linkedList.addToHead(4);
linkedList.addToHead(5);
linkedList.addToHead(6);

linkedList.print()

console.log(linkedList)

module.exports = LinkedList;