class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // space o(1)
    this.length = 0; // space o(1)
  }

  // time complexity o(1)
  addToHead(val) {
	const newNode = new LinkedListNode(val) // space o(1)
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  // time complexity o(n)
  addToTail(val) {
	let newNode = new LinkedListNode(val); // space o(1)

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
	//   for(let i = 0; i < this.length; i++){
	// 		current = current.next;
	//   }
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

module.exports = LinkedList;
