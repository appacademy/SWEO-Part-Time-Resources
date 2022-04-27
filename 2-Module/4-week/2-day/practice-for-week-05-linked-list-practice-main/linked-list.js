class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
	this.head = null
    // this.tail = null
    this.length = 0;
  }

  // big space and time o(1)
  addToHead(val) {
	// const node = new LinkedListNode(val); // space o(1)



    // [node.next, this.head] = [this.head, node]; // space o(1)
	// 											// time o(1)
    // this.length++; // space o(1)

	this.length++
    const newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // big o of space o(1) and time o(n)
  // time o(n) because we don't have a tail pointer so therefore we have to iterate
  // through all the nodes to reach the end
  addToTail(val) {
	const newNode = new LinkedListNode(val); // space o(1)

    if (!this.head) this.head = newNode; // space o(1)
    else {
		let curr = this.head; // space o(1)

		while (curr.next) curr = curr.next; // time o(n)

		curr.next = newNode; // space o(1), time o(1)
    }

    this.length++; // space o(1)

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

const ll = new LinkedList();

const redNode = new LinkedListNode('red');

ll.head = redNode;



ll.addToHead('blue');
ll.addToTail('yellow');

console.log(redNode)

module.exports = LinkedList;
