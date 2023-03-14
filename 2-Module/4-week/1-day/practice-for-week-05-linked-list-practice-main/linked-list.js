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
	// const linkedList = new LinkedListNode(val)
	// linkedList.next = this.head
	// this.head = linkedList
	// this.length++

	const newHead = new LinkedListNode(val)
	newHead.next = this.head
	this.head = newHead
	this.length++
  } // time o(1)

  addToTail(val) {
	const newNode = new LinkedListNode(val)
	this.length++
	if(!this.head) {
		this.head = newNode
	} else {
		let currentNode = this.head;
		while(currentNode.next){
			currentNode = currentNode.next
		}
		currentNode.next = newNode
	}
  } // o(n)


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
