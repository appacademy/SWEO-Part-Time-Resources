class LinkedListNodes {
    constructor(value, next) {
        this.value = value; //value represents the pointer to a piece of data (i.e. 19, "hello", array)
        this.next = next; //next is a pointer that points to an INSTANCE of another LinkedListNodes
    }
}


//class that represents the actually linked list DATASTRUCTURE
class LinkedList {
    constructor() {
        this.head = null; //initially set the head pointer to the value of null

    }

    //add more linkedList methods like traversal, adding, removing etc. later

    print() {
        let current = this.head;

        process.stdout.write("Head -> ")
        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }

        console.log("NULL");
    }
}


//examples:

const ll = new LinkedList() //instantiate the datastructure linked list (similar to how we would do new Array())

//ll structure that we want to represent in our example:
//head --> firstNode --> middleNode --> lastNode --> null
const lastNode = new LinkedListNodes("last node", null);
const middleNode = new LinkedListNodes(200, lastNode);
const firstNode = new LinkedListNodes("front node", middleNode);

ll.head = firstNode;

//run ll.print() to generate the example logged in our output
ll.print(); //instance method print()
