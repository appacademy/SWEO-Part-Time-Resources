//first create a class to represent the nodes
class LinkedListNode {
    constructor(value, next) {
        this.value = value; //represents the data (i.e. a number like 10)
        this.next = next; //represents the LinkedListNode instance that we are pointing to next.
    }
}


//create a class for creating our linked list
class LinkedList {
    constructor() {
        this.head = null; //this.head is a pointer that points to a LinkListNode instance.
    }

    //should have a print functionality
    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }

        console.log("NULL");
    }
}

//examples
const ll = new LinkedList();

// head --> thirdNode --> secondNode --> lastNode --> null
const lastNode = new LinkedListNode("last", null);
const secondNode = new LinkedListNode(20, lastNode);
const thirdNode = new LinkedListNode(30, secondNode);

//point our ll head to the third node
ll.head = thirdNode;

//print our ll list
ll.print();