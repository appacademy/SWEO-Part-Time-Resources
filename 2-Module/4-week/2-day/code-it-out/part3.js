class LinkedListNode {
    constructor(value) {
        this.value = value; //represents the data (i.e. a number like 10)
        this.next = null; //represents the LinkedListNode instance that we are pointing to next.
      }
}

//`LinkedList` for creating and representing our linked list datastructure instance
class LinkedList {
    constructor() {
        this.head = null; //this.head is a pointer that points to a LinkListNode instance.
        this.tail = null; //trade off a bit of space to keep track of a tail.
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
            //1) new node next's pointer will point to whatever this.head is pointing to.
            newNode.next = this.head;
            //2) head point to the new node
            this.head = newNode;
        }
    }

    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }

        //if current.next is null, then while loop will not be hit, and this will execute after
        console.log("NULL");
    }
}


//Below:
    //1) instantiate LinkedList (hint: `new`), and add a few examples in using `addToHead`, then after each one, run the method `.print()` to see the output.
    //2) finally, log the LinkedList's instance `.head` property and see what you get. Try `.tail` as well!

//instantiate linked list
const ll = new LinkedList();

ll.addToHead("10");
ll.print();
ll.addToHead(100);
ll.print();
ll.addToHead("3rdItem");
ll.print();

console.log(ll.head); //we are logging the pointer/reference to where the head is pointing.
console.log(ll.tail); //we are logging the pointer/reference to where the tail is
