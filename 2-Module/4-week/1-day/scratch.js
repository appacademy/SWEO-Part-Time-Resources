//* Linked Lists
  //they're like arrays in that the elements are sequential, but they're slower, bigger and don't have to occupy a contiguous block of memory.
  class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
      this.prev = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    // c->-b->a->null
    addToHead(val) {
      // let newNode = new Node(val);
      // newNode.next = this.head;
      // this.head = newNode;
      this.head = new Node(val, this.head);
      if (!this.tail) this.tail = this.head;
    }
    addToTail(val) {
      //find null and replace it
      // let curr = this.head;

      // while (curr.next) {
      //   curr = curr.next;
      // }

      if (this.tail) {
        this.tail.next = new Node(val);
      } else {
        this.head = new Node(val);
        this.tail = this.head;
      }
    }
    removeFromHead() {
      // let curr = this.head;
      if (this.head) this.head = this.head.next;
    }
    removeFromTail() {
      if (this.head.next) {
        let curr = this.head;
  
        while (curr.next !== this.tail) {
          curr = curr.next;
        }
  
        curr.next = null;
        this.tail = curr;
      }
    }
    print() {
      let curr = this.head;
      let res = '';

      while (curr) {
        res += `${curr.value} -> `;
        curr = curr.next;
      }

      res += 'null'
      console.log(res);
    }
  }

  let nodeA = new Node('a')
  let nodeB = new Node('b', nodeA);
  let nodeC = new Node('c', nodeB);

  let ll = new LinkedList()
  ll.head = nodeC;
  // console.log(ll);
  ll.addToTail(1);
  ll.addToTail(2);
  ll.addToTail(3);
  ll.addToTail(4);
  ll.print()
  ll.addToHead('d');
  ll.addToHead('e');
  ll.addToHead('f');
  ll.addToHead('g');
  ll.print()
  ll.removeFromHead();
  ll.removeFromHead();
  ll.removeFromHead();
  ll.print()
  ll.removeFromTail();
  ll.removeFromTail();
  ll.removeFromTail();
  ll.print()
//* Queues
  // First In, First Out
  let ArrayQueue = [];
  class Queue {
    constructor() {
      this.data = new LinkedList();
    }
    enqueue(val) {
      this.data.addToTail(val)
    }
    dequeue() {
      this.data.removeFromHead();
    }
  }

  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(1);
  queue.dequeue();
  console.log(queue.data);