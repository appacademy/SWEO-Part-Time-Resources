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
    const node = new LinkedListNode(val);

    node.next = this.head; // Since we're adding to head, the old head is our new next
    this.head = node; // Our new head is our new node

    this.length++;
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let findTail = this.head;

      while (findTail.next) {
        findTail = findTail.next;
      }

      findTail.next = newNode;
    }

    this.length++;
  }

  // You can use this function to help debug
  print(curr = this.head) {
    console.log(curr.value);
    if (curr.next) {
      this.print(curr.next);
    } else {
      console.log(null);
    }
  }
}

module.exports = LinkedList;
