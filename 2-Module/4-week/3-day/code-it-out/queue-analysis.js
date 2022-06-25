//QUEUES

//1) Select the representation(s) of queues: FIFO, LIFO, FILO, LILO
//you answer: 


//2) Given a simple implementation of a queue using linked list, determine the output
const {LinkedList} = require("./linked-list-source/singly-linked-list.js"); //using built linked-list from `linked-list-source`

class Queue {

  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.addToTail(value);
  }

  dequeue() {
    const value = this.linkedList.head.value;
    this.linkedList.removeFromHead();

    return value;
  }

}

const q = new Queue();
q.enqueue("Lebron");
q.dequeue();
q.enqueue("warriors");
q.enqueue("are");
q.enqueue("winners");
q.dequeue();
q.dequeue();



//What will be returned from calling q.dequeue() once more <-- what will this return.
//hint: draw out the flow!!! (think message queue from event loop)
//answer:


//DO NOT run node!! analyze and try it first.
// console.log(q.dequeue());




