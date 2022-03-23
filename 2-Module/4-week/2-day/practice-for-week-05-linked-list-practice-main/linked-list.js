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
    // create a new node to be added
    let newNode = new LinkedListNode(val)
    // point the new node to the current head
    newNode.next = this.head
    // coerce the current head to be the newNode
    this.head = newNode
    // increase the size
    this.length ++
  }

  addToTail(val) {
    // check to see if we have a head currently
    if(!this.head){
      // if not call addToHead passing in our value
      this.addToHead(val)
    }else{
      // create a new node
      let newNode = new LinkedListNode(val)
      // if we do have a head, we need to traverse the list to find the last node in the list
      // create a current node variable, set it to this.head
      let current = this.head
      // create a while loop, where we will loop while current is not null
      while(current){
        // check if the next value of the current node is null
        if(current.next === null){
          // then assign the next value of current to my new Node
          current.next = newNode
          // then increment the length of the list by one 
          this.length ++
          // to make this act like the push method, I will return the new length
          return this.length
        }
        // incrementing to the next node
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

module.exports = LinkedList;