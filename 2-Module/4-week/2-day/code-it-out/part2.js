class LinkedListNode {
    constructor(value) {
        this.value = value; //represents the data (i.e. a number like 10)
        this.next = null; //represents the LinkedListNode instance that we are pointing to next.
      }
}

//Below: 
//1) create a class `LinkedList` for creating and representing our linked list datastructure instance

//requirements: should have a `tail` property and a `head` property but no data passed in to the constructor. What should the `tail` and `head` property be intially assigned the value of?

//2) create a `addToHead` method that when given a `valueData` it will create a node and add it to the front/head.