// Node class is implemented for you, no need to look for bugs here!
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

  addToHead(val) {
    const newNode = new DoublyLinkedNode(val);

    if (this.length >= 1) {
      this.head.prev = newNode;
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    const newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
  }

  removeFromHead() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (oldHead.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
    }
    this.length--;
    return oldHead.value;
  }

  removeFromTail() {
    if (!this.head) return undefined;
    const removed = this.tail;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
    }

    this.length--;
    return removed.value;
  }

  peekAtHead() {
    if (!this.head) return undefined;
    return this.head.value;
  }

  peekAtTail() {
    if (!this.tail) return undefined;
    return this.tail.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
