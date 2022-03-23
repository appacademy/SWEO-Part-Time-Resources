class DoublyLinkedListNode {
    constructor(val) {
      this.value = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null
      this.tail = null
      this.length = 0
    }
  
    addToHead(val) {
      // create a new node with the passed in value
      let newNode = new DoublyLinkedListNode(val)
      // check to see if we have a head already
      if(!this.head){
        // if we dont, we need to set the head and the tail to the new node
        this.head = newNode
        this.tail = newNode
      }else{
        // if we do already have a head,
        // create a variable equal to the current head
        let currHead = this.head
        // say the new nodes .next is going to be our current head, 
        newNode.next = currHead
        // our current heads prev is our newNode
        currHead.prev = newNode
        // update the value of our head to the new node
        this.head = newNode
      }
      // increment the length by one
      this.length++
      return this.length
    }
  
    addToTail(val) {
      // create a variable that is equal to my newNode
      let newNode = new DoublyLinkedListNode(val)
      // check to see if I have a tail
      if(!this.tail){
        // if I dont then I can call add to head passing the val
        this.addToHead(val)
      }else{
        // if I do,
        // create a variable the is equal to the current tail
        let currTail = this.tail
        // set the new nodes prev to the current tail
        newNode.prev = currTail
        // set the current tails next to my newNode
        currTail.next = newNode
        // and update my tail to the new node and increment the length
        this.tail = newNode
        this.length ++
        return this.length
      }
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
    removeFromTail(){
        // create a variable that is equal to my current tail
        let oldTail = this.tail
        // create a variable for my new tail which is the current tail.prev
        let newTail = oldTail.prev
        // set the new tails.next to null
        newTail.next = null
        oldTail.prev = null
        // reassign my tail to the new tail
        this.tail = newTail
        // decrement my length
        this.length --
        return oldTail
    }
    removeFromHead(){
        // create a variable that is my old head, 
        let oldHead = this.head
        // create a variable that will be my newHead
        let newHead = this.head.next
        // say that my new heads .prev = null
        newHead.prev = null
        // oldHead.next = null
        oldHead.next = null
        // say that this.head equal to newHead
        this.head = newHead
        // decrement the length
        this.length -- 
        return oldHead
    }
  }

  class Queue{
      constructor(){
          this.queue = new DoublyLinkedList()
      }
  
      addToQueue(val){
        this.queue.addToTail(val)
      }
      removeFromQueue(){
        return this.queue.removeFromHead()
      }
      printQueue(){
          this.queue.print()
      }
  }

  let queue = new Queue()
  queue.addToQueue(1)
  queue.addToQueue(2)
  queue.addToQueue(3)
  queue.addToQueue(4)
  queue.printQueue()
  console.log(queue.removeFromQueue().value)
  queue.printQueue()
  // Last in first out IE tail
// class Stack{
//     constructor(){
//      this.myStack = new DoublyLinkedList()
//     }
//     addToStack(val){
//         this.myStack.addToTail(val)
//     }
//     removeFromStack(){
//         return this.myStack.removeFromTail()
//     }
//     printStack(){
//         this.myStack.print()
//     }
// }

// first in First Out iE head

// let stack = new Stack()

// stack.addToStack(1)
// stack.addToStack(2)
// stack.addToStack(3)
// stack.addToStack(4)
// stack.printStack()

// console.log(stack.removeFromStack().value)

// stack.printStack()