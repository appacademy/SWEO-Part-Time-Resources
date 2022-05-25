class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const myObj = {
  name: 'Zaviar',
};

console.log(myObj.age);

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      // for (let i = 0; i < this.length - 1; i++) {
      //   currentNode = currentNode.next;
      // }
      currentNode.next = newNode;
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

    console.log('NULL');
  }
}

module.exports = LinkedList;
