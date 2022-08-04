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
    const newNode = new QueueNode(node)
    if (!this.head){
      this.head = newNode;
    } else if (this.length === 1) {
      this.head.next = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this.length;
  }

  dequeue(){
    if (this.length === 0) return null;

    const head = this.head;
    if (this.length === 1){
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return head.node;
  }
}

// const q = new Queue();
// q.enqueue(4);
// q.enqueue(3);
// q.enqueue(2);
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q)
// console.log(q.dequeue())


module.exports = Queue;