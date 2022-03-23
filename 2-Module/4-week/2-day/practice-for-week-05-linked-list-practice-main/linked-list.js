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
    // first, create a new node
    const newNode = new LinkedListNode(val)
    // set new node.next to equal the head
    newNode.next = this.head
    // this.head = newNode
    this.head = newNode
    // increase the value of the length
    this.length++
  }

  addToTail(val) {
    // check if there is a head
    if(!this.head){
      // if not 
      // call Add to head
      this.addToHead(val)
      //else 
    }else{
      let newNode = new LinkedListNode(val)
      // while loop to get to the last thing before the end and insert a new node
      // crete a current var
      let current = this.head
      // while(current.next){
      //   // moving on to the next node
      //   current = current.next
      // }
      // creating a new node, and setting as the next of our last node
      // current.next = new LinkedListNode(val)
      // this.length++

      //possible alternative
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

// let someNode = someNode

module.exports = LinkedList;