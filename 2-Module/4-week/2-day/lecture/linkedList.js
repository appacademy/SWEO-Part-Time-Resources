// Let's create a Singly Linked List class and discuss how it works!

class LinkedListNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null; // to improve time complexity when we want to add to
    // the end of the list we create a pointer to the tail. 
    // trading space for time.
  }

  addToHead(value){
    // if there is not a head (meaning there is no tail either)
    // 1. create new node with next set to null
    // 2. set this.tail to point to the new node
    
    // if there is already a head, replace it with a new node
    // 1. create new node with it's next set to the current head
    // 3. set this.head to point to the new node
    const newNode = new LinkedListNode(value);

    if (!this.head){
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;

  }
  // time complexity of each of these steps is O(1). (unlike array.unshift()
  // which is linear!) There is no iteration or updating indices.

  addToTail(value){
    // if there is not a head (meaning there is no tail either)
    // 1. create new node with its next set to null
    // 2. set this.head to point to the new node

    // if there is already a tail, replace it with a new node
    // 1. create new node with it's next set to null
    // 2. set the current tail's next to point to the new node
    // 3. set this.tail to point to the new node
    const newNode = new LinkedListNode(value);

    if (!this.head){
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;

  }
  // O(1) time complexity for this one as well!

  removeFromHead(){
    // if the current head's next is null, remove both the head and tail
    // 1. set this.head and this.tail to be null

    // if the current head has a next, just remove it
    // 1. set this.head to be the current head's next.
    if (!this.head.next){
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    
  }
  // Once again, O(1) time complexity here!

  removeFromTail(){
    // traverse the list until we find the second to last node
    // 1. traverse the list until we find a nodes who's next.next is null.
    // 2. set that nodes next to be null

    let currentNode = this.head;
    while (currentNode.next.next){
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }
  // this is O(n) time complexity since we have to traverse the list to find
  // the node that is second to last.

}

//--------------------------------------------------------------------------
