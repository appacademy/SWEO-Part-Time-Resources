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
    const newHead = new LinkedListNode(val)
	newHead.next = this.head
	this.head = newHead
	this.length++
  }

  addToTail(val) {
	// let newNode2 = new LinkedListNode(val, null);
    // if (this.length === 0) {
    //   this.addToHead(val);
    // }
    // else{
    //   let currentNode = this.head;
    //   while (currentNode.next) {
    //     currentNode = currentNode.next;
    //   }
    //   currentNode.next = newNode2;
    //   this.length += 1;
    // }
	const val1 = new LinkedListNode(val)
    this.length++
    if (!this.head) { // if our head value is null
      this.head = val1
      return
    }
    let current = this.head
    while (current.next) { // null?
      current = current.next
    }
    current.next = val1
  } // time o(n)

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

module.exports = LinkedList;
