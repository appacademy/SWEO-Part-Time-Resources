class LinkedListNode {
    constructor(value) {
        this.value = value; //represents the data (i.e. a number like 10)
        this.next = null; //represents the LinkedListNode instance that we are pointing to next.
      }
}

//Below: 
//1) create a class `LinkedList` for creating and representing our linked list datastructure instance

//requirements: should have a `tail` property and a `head` property but no data passed in to the constructor. What should the `tail` and `head` property be intially assigned the value of?
class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  //we need to build method for the instances of link list. This is kinda like methods of arrays for example .push, .unshift, .shift
  
  //2) create a `addToHead` method that when given a `valueData` it will create a node and add it to the front/head.
  addToHead(valueData){
    //create the node for us here
    const newNode = new LinkedListNode(valueData) //instance of the link list node class.

    //0) if this.head is null then we will point both the head and tail to the node we just created
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      //1) in normal situation, we want to point the newNode.next to where this.head is pointing
      newNode.next = this.head;
      //2) this.head should now point to the newNode
      this.head = newNode;

    }
  }
}
