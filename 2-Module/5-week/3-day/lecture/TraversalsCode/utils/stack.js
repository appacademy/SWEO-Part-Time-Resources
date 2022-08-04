// build a stack (doubly linked list)

class StackNode{
  constructor(node){
    this.node = node;
    this.next = null;
    this.prev = null;
  }
}

class Stack{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(node){
    const newNode = new StackNode(node);
    if (!this.head){
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++
    return this.length;
  }

  pop(){

    if (!this.head) return null;
    const tail = this.tail;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.length--;
    return tail.node;
  }
}

// const s = new Stack();
// s.push(4)
// s.push(3)
// s.push(2)
// console.log(s)
// console.log(s.pop())
// console.log(s.pop())
// console.log(s.pop())
// console.log(s)
// console.log(s.pop())

module.exports = Stack;