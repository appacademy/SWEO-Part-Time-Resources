class LinkedListNode {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
      this.length = 0
    }
  
    addToHead(val) {
      const newNode = new LinkedListNode(val)
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
  
    addToTail(val) {
      if(!this.head){
        this.addToHead(val)
      }else{
        let newNode = new LinkedListNode(val)
        let current = this.head
        while(current){
          if(current.next === null){
            current.next = newNode
            this.length++
            break
          }
          current = current.next
        }
      }
    }

    removeHead(){
        if(this.head){
            let removed = this.head
            this.head = this.head.next
            this.length --
            return removed
        }
    }

    removeTail(){
        if(this.head == null){
            return 'The list is empty'
        }
        let current = this.head
        while(current){
            if(current.next.next === null){
                let tail = current.next
                current.next = null
                this.length --
                return tail
            }
            current = current.next
        }
    }

    print() {
      let current = this.head;
  
      while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
      }
  
      console.log("NULL");
    }
}

class Queue{
    constructor(){
        this.myQueue = new LinkedList()
    }

    addToQueue(val){
        this.myQueue.addToTail(val)
    }

    dequeue(){
       return this.myQueue.removeHead()
    }

    printQueue(){
        this.myQueue.print()
    }
}
let queue = new Queue()

queue.addToQueue(1)
queue.addToQueue(2)
queue.addToQueue(3)
queue.addToQueue(4)
console.log(queue.dequeue().value)
console.log(queue.dequeue().value)
console.log(queue.dequeue().value)
queue.printQueue()

// class Stack {
//     constructor(){
//         this.myStack = new LinkedList()
//     }

//     addToStack(val){
//         this.myStack.addToTail(val)
//     }
//     unstack(){
//     //    remove the last element from my linked list
//        return this.myStack.removeTail()
//     }
//     printStack(){
//         this.myStack.print()
//     }
// }

// let stack = new Stack()

// stack.addToStack(1)
// stack.addToStack(2)
// stack.addToStack(3)
// stack.addToStack(4)
// console.log(stack.unstack().value)
// console.log(stack.unstack().value)

// stack.printStack()
