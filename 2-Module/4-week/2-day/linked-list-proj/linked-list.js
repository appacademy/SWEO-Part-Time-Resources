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
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    //edge case: head is null
    if(this.head === null){
      this.head = newNode;
    }
    //otherwise, the normal add to beginning case
    else{
      //1) point newNode.next to where head currently is.
      //2) have this.head point to newNode now
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  addToTail(val) {
    //create the newNode w/ the given value
    const newNode = new LinkedListNode(val);

    //if this.head is null, take this.head and point to the newNode
    if(this.head === null){
      this.head = newNode;
    }
    else{
      //first traverse w/ the an initial pointer called current should point to the start (aka this.head)
      let current = this.head;
      //while current.next is not null continue to traverse: current = current.next (increase my current position by one until we stop executing this while loop)
      while(current.next !== null){
        current = current.next;
      }

      //after we exit the while loop, we know that current.next is now = null. Now we can set current.next = newNode.
      current.next = newNode;
    }

    //increment the length by 1 after we do adding to the tail
    this.length += 1;

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