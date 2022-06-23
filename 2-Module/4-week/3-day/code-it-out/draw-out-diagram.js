//first create a class to represent the nodes
class LinkedListNode {
    constructor(value) {
        this.value = value; //represents the data (i.e. a number like 10)
        this.next = null; //represents the LinkedListNode instance that we are pointing to next.
    }
}


//create a class for creating our linked list - O(n) space, where n is the number of nodes.
class LinkedList {
    constructor() {
        this.head = null; //this.head is a pointer that points to a LinkListNode instance.
        this.tail = null; //trade off a bit of space to keep track of a tail.
    }

    //should have a print functionality O(n)
    print() {
        let current = this.head;

        //traverse until we hit null.
        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }

        //if current.next is null, then while loop will not be hit, and this will be hit instead
        console.log("NULL");
    }

    //add to the front of the list O(1)
    addToHead(value) {
        //create new node w/ passed in value
        const newNode = new LinkedListNode(value);

        //0) edge case: if head's pointer is null, then make the head and tail to newNode
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            //1) point newNode's next to the node where head is currently pointing
            newNode.next = this.head;
            //2) Once we connected the newNode, reassign this.head to the newNode (this is the new head)
            this.head = newNode;
        }
    }

    //addToTail should add a new node to the end of a list
    addToTail(value) {
        //create new node w/ the passed in value
        const newNode = new LinkedListNode(value);

        //0) edge case: what if head --> null
        if (this.head === null) {
            //set both head and tail to the newNode
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            //first we need to point end.next (tail.next) to the new node first
            this.tail.next = newNode;
            //take the tail which is `end` and point it to newNode
            this.tail = newNode;
        }
    }

    // to remove from head, we just need to set head = head.next and allow garbage collection to clean up (if no reference points to that data, it will get removed.)
    removeFromHead() {
        //first check if this.head exist since if we tried null.next, it will give us error.
        if (this.head) {
            this.head = this.head.next;
        }

        //edge case to handle when head is set to null. Tail should also be set to null
        // if there's only one node and head is now pointing at null (from above), tail needs to also move to null (where head is)
        if (this.head === null) {
            this.tail = null;
        }
    }
}


//TASK: Based on how this linked list was implemented... diagram or draw out each example
console.log("----------Linked List Start Example--------")
const ll = new LinkedList();

console.log("----------test addtoHead()--------")
//Linked list currently looks like:  NULL
ll.addToHead("one!");
ll.addToHead("zero!")
ll.print(); //zero! -> one! -> NULL

console.log("----------test addToTail()--------")
//Linked list currently looks like:  zero! -> one! -> NULL
ll.addToTail(2)
ll.print();  //zero! -> one! -> 2 -> NULL

console.log("----------test removeFromHead()--------")
//Linked list currently looks like:  //zero! -> one! -> 2 -> NULL
ll.removeFromHead(); 
ll.print(); //  one! -> 2 -> NULL


//execute node this file after.


//link to diagram: go to "draw-out-diagram" tab below
//https://drive.google.com/file/d/1IF3PfWaZFWPlxeIAKBKqLjEvQLIOD4ot/view?usp=sharing