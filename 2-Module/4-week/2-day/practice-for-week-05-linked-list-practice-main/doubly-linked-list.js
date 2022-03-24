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
    // make a new node 
    const newNode =  new DoublyLinkedListNode(val)
    // set that nodes next to the current head
    newNode.next = this.head
    // check if the list is empty 
    if(this.head){
      // if its not, set the head prev to the new node
      this.head.prev = newNode
    }else{
      // if it is empty, then we will set the tail to the new node
      this.tail = newNode
    }
    // set the head to new node
    this.head = newNode
    // length ++
    this.length++
  }

  addToTail(val) {
    // create a new node
    const newNode =  new DoublyLinkedListNode(val)
    // find out if there is a head
    // if there is not a head
    if(!this.head){
      // if there is no head
      // set the new Node as our head and our tail
      this.head = newNode
      this.tail = newNode
      this.length++
      return newNode
      // possible alternative
      // this.addToHead(val)
      // return newNode
    }
    // }else{
    //   // if there is a head
    //   // set the next of our tail to new node
    //   this.tail.next = newNode
    //   // add the previous 
    //   newNode.prev = this.tail
    //   this.tail = newNode
    // }
    // increment length
    //Possible alternative
    this.tail.next = newNode
    // add the previous 
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
    // this.print()
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
}

// let doublyLinkedList = new DoublyLinkedList();

// doublyLinkedList.addToTail(1);
// // doublyLinkedList.addToHead(2);
// // doublyLinkedList.addToHead(3);

// doublyLinkedList.print()

module.exports = DoublyLinkedList;