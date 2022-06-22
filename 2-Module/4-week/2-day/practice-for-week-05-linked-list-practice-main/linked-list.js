class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    //this.tail = null //CANNOT USE THIS
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    //edge case: head is null
    if (this.head === null) {
      this.head = newNode;
    }
    //otherwise, the normal add to beginning case
    else {
      //1) point newNode.next to where head currently is.
      //2) have this.head point to newNode now
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  addToTail(val) {
    //addToTail needs to create a new link list NODE instance 
    //this represents the node that we are going to add to the tail 
    const newNode = new LinkedListNode(val); //generate instance w/ value as a property in this instance.

    //0) first off handle edge case where our link list is empty (this.head = null). We must re-assign our this.head pointer = newNode
    if(this.head === null){
      this.head = newNode;
      this.length += 1;
    }

    //else we need to add the newNode to the end of the list 
    else{
      //first create a current pointer that will go until we get to the last node (represents a fake tail)
      let current = this.head;
      
      //traverse the link list, until we get to that last node (fake tail)
      while(current.next){
        //while current.next exist, I want to reassign current pointer to be the next node (current = current.next)
        current = current.next
      }
      //after getting to our last node (fake tail) while loop will exit
      //these line of code will then be executed after we get current to to the last node.
      current.next = newNode;
      this.length += 1;
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