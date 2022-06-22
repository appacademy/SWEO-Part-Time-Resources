class LinkedListNode {
  constructor(value) {
      this.value = value; //represents the data (i.e. a number like 10)
      this.next = null; //represents the LinkedListNode instance that we are pointing to next.
    }
}

//Below: 
//1) create a class `LinkedList` for creating and representing our linked list datastructure instance
//think of this class as like Array() w/ methods like .push .unshift, etc.

//requirements: should have a `tail` property and a `head` property but no data passed in to the constructor. What should the `tail` and `head` property be intially assigned the value of?
class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  //addToHead is simlar to array.unshift(). addToHead is adding to the front of the linked list.
  addToHead(valueData){ //O(1) time complexity when adding a new element to the front of the list (whereas Array.unshift() has a O(n) time complexity for adding to the front of an array)
    //addToHead will create a newNode for us, then it will add it to the head of the LinkedList
    const newNode = new LinkedListNode(valueData); //created node that we will add to the beginning

    //0)edge case: handle the case where initially our head is null. If this.head is null, the point this.head to the new node that is created (newNode)
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }

    //common case: where we would continue adding a new node to an existing linked list.
    else{
      //1) first we need to connect our newNode.next to the first node(this.head which points to the first node)
      newNode.next = this.head
      //2) take the head and give it a new home (the newNode that we just connected to our linked list, which was added to the front.)
      this.head = newNode;
    }
  }
}



//2) create a `addToHead` method that when given a `valueData` it will create a node and add it to the front/head.