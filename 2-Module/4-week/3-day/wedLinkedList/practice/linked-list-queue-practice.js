// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }

      curr.next = newNode;
    }
    this.length++;
    return this.head;
  }

  listLength() {
    // O(1)
    return this.length;

    // // O(n)
    // if (!this.head) return 0;
    // let length = 1;
    // let curr = this.head;

    // while (curr.next) {
    //   curr = curr.next;
    //   length++;
    // }

    // return length;
  }

  sumOfNodes() {
    if (!this.head) return null;
    let sum = this.head.value;
    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
      sum += curr.value;
    }

    return sum;
  }

  averageValue() {
    return this.sumOfNodes() / this.length;
  }

  findNthNode(n) {
    if (n > this.length) return undefined;

    let curr = this.head;
    while (n && curr.next) {
      curr = curr.next;
      n--;
    }

    return curr;
  }

  findMid() {
    // Singly linked list
    const midPoint = Math.ceil(this.length / 2);
    return this.findNthNode(midPoint - 1); // because findNthNode is 0 indexed
  }

  reverse() {
    const reversedList = new SinglyLinkedList();

    if (!this.head) return reversedList;

    let curr = this.head;
    reversedList.addToHead(curr.value);
    while (curr.next) {
      curr = curr.next;
      reversedList.addToHead(curr.value);
    }

    return reversedList;
  }

  reverseInPlace() {
    // O(n^2)
    if (!this.head) return null;
    for (let i = 0; i < this.length / 2; i++) {
      let left = this.findNthNode(i);
      let right = this.findNthNode(this.length - i - 1);
      let temp = left.value;
      left.value = right.value;
      right.value = temp;
    }

    // // a/A's solution O(n)
    // if (!this.head) return this;
    // let curr = this.head;
    // let next = curr.next;
    // let prev = null;
    // while (next) {
    //   next = curr.next;
    //   curr.next = prev;
    //   prev = curr;
    //   curr = next;
    // }
    // this.head = prev;
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this.head;
  }

  findMid() {
    let left = this.head;
    let right = this.tail;
    let flipFlop = true;

    while (left.value !== right.value) {
      if (flipFlop) {
        right = right.prev;
      } else {
        left = left.next;
      }
      flipFlop = !flipFlop;
    }

    return left;
  }

  reverse() {
    const reversedList = new SinglyLinkedList();

    if (!this.tail) return reversedList;

    let curr = this.tail;
    reversedList.addToTail(curr.value);
    while (curr.prev) {
      curr = curr.prev;
      reversedList.addToTail(curr.value);
    }

    return reversedList;
  }

  reverseInPlace() {
    // O(n)
    // You can swap the
    //! lines
    //? with this line
    if (!this.head) return null;
    let left = this.head;
    let right = this.tail;
    //! let temp;
    for (let i = 0; i < this.length / 2; i++) {
      // Note that I added a this.length to this class to get this to work
      //! temp = left.value;
      //! left.value = right.value;
      //! right.value = temp;
      [left.value, right.value] = [right.value, left.value]; //?
      left = left.next;
      right = right.prev;
    }

    // // a/A's solution O(n)
    //  let curr = this.head;
    //  let prev;
    //  while (curr.next) {
    // 		 prev = curr;
    // 		 [curr.prev, curr.next] = [curr.next, curr.prev];
    // 		 curr = curr.prev;
    //  }
    //  this.head = curr;
    //  this.head.next = prev;
    //  return this;
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
