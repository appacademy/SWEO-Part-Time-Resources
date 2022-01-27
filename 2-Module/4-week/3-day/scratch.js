/*
Node class
  val property
  next property
Queue class
  head property
  tail property
  length property
  enqueue method
  dequeue method
  find method (will traverse the list and return the node containing the search value)
  size method (will return how many nodes are in the queue)
*/


class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //addToTail
  enqueue(val){
    const newNode = new Node(val);

    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  //removeFromHead
  dequeue(){
    if(!this.head) return;

    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }

  find(searchVal){
    if(!this.head) return 'list is empty';

    let current = this.head

    while(current){
      if(current.val === searchVal){
        return current;
      }
      current = current.next;
    }
    return null;
  }

  size(){
    return this.length;
  }
}

const test = new Queue();
// console.log(test); // head: null tail: null length: 0
// test.enqueue(0);
// console.log(test); // head: {val 0} tail: {val 0} length: 1
// test.enqueue(1)
// test.enqueue(2)
// test.enqueue(3)
// console.log(test) // head: {val 0}, tail: {val: 3}, length:4
// test.dequeue();
// console.log(test); //head: {val 1}, tail: {val: 3}, leength: 3
// console.log(test.size());
// console.log(test.find(1));
