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
}

module.exports = DoublyLinkedList;