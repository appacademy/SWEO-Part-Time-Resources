//* Linked Lists - like arrays but slower and bigger, but they don't occupy a contiguous block of memory
//Pointers allow us to make complex data structures
//* Nodes
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    // this.prev = prev;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(val) { // O(1)
    // let newNode = new Node(val);
    // newNode.next = this.head;
    // this.head = newNode;

    this.head = new Node(val, this.head)
    if(!this.tail) this.tail = this.head;
  }
  addToTail(val) { // O(n)
    // Without this.tail O(n)
    // let curr = this.head;

    // while (curr.next) {
    //   curr = curr.next;
    // }

    // curr.next = new Node(val);
    //with this.tail O(1)
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  removeFromTail() { //O(n)
    let curr = this.head;

    while (curr.next !== this.tail) {
      curr = curr.next;
    }

    curr.next = null;
    this.tail = curr;
  }
  removeFromHead() {
    // if(this.head === null) {
    //   this.tail === null;
    // } else {
    //   this.head = this.head.next;
    // }
    if (this.head) this.head = this.head.next;
  }
  print() { //O(n)
    let curr = this.head;
    let res = ''

    while (curr) {
      // process.stdout.write(`${curr.value} -> `)
      res += `${curr.value} -> `;
      curr = curr.next;
    }
    res += 'null'
    console.log(res);
  }
}

// let a = new Node('a', null);
// let b = new Node('b', a);
// let c = new Node('c', b);
let ll = new LinkedList();
// ll.head = c;
ll.addToTail('d');
ll.addToTail('e');
ll.addToTail('f');
ll.print();
ll.addToHead('a');
ll.addToHead('b');
ll.addToHead('c');
ll.print();
ll.removeFromTail();
ll.print();
ll.removeFromHead();
ll.print();

//* QUEUES - First In, First Out
// add = enqueueing
// remove = dequeueing

class Queue{
  constructor() {
    this.data = new LinkedList();
  }
  enqueue(val) {
    this.data.addToTail(val);
  }
  dequeue() {
    this.data.removeFromHead();
  }
}

let queue = new Queue();
queue.enqueue(1);
console.log(queue)



