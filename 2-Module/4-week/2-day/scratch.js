class Queue {
  constructor() {
    this.store = new Array()
  }

  size() {
    // returns the length of the queue
  }

  enqueue(ele) {
    //adds ele to end of queue
  }

  dequeue() {
    //remove the first element
  }

  peek() {
    //return the first element
  }
}
class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;

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
    let newNode = new LinkedListNode(val)

    this.length += 1

    if(!this.head){
      this.head = newNode;
      return this
    }
    let curr = this.head

    while(curr.next){
      curr = curr.next
    }

    curr.next = newNode


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


class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val)

    if(this.length >= 1){
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
    this.length++
  }

  addToTail(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val)
    if(this.length >= 1){
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode
    } else{
      this.head = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.addToHead(1);
doublyLinkedList.addToHead(2);
doublyLinkedList.addToHead(3);
doublyLinkedList.print()

module.exports = DoublyLinkedList;
