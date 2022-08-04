// build a queue (singly linked list)

class QueueNode{
  constructor(node){
    this.node = node;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(node){
    let newNode = new QueueNode(node);
    // what do we do if its empty
    // what do we do if theres one thing
    // what do we do otherwise
    if (this.head === null){
      this.head = newNode;
    } else if (this.length === 1){
      this.head.next = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue(){
    if (!this.head) return null;

    const oldHead = this.head;

    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return oldHead.node;
  }
}

// let q = new Queue();
// q.enqueue(4)
// q.enqueue(3)
// q.enqueue(2)
// // console.log(q);
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q)
// console.log(q.dequeue())


module.exports = Queue;