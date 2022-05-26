// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
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
    return this;
  }

  removeFromHead() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = this.head.next;

    this.length--;
    return oldHead;
  }

  removeFromTail() {
    if (!this.head) return undefined;

    if (!this.head.next) {
      const removed = this.head;
      this.head = null;
      this.length--;
      return removed;
    }

    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }

    const removed = curr.next;
    curr.next = null;

    this.length--;
    return removed;
  }

  peekAtHead() {
    if (!this.head) return undefined;
    return this.head.value;
  }

  print() {
    let curr = this.head;
    if (!curr) return undefined;

    console.log(curr.value);

    while (curr.next) {
      console.log(curr.next.value);
      curr = curr.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
