class DoublyLinkedListNode {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {

        //addToHead should create a new node for us based on the val passed in
        const newNode = new DoublyLinkedListNode(val);
       
        //if the length is less than 1, means that the list must be empty.
         //case 0: adding a new node into an empty link list
        if(this.length < 1){
           
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
        }
        //case 1: adding a new node into a link list w/ a length that is greater than 0. (something exists in this list)
        else{
            //first: take the newNode.next and connect it with the current head (newNode.next = this.head)
            newNode.next = this.head;

            ///second: take the current head's previous and connect with the new node (this.head.prev = newNode)
            this.head.prev= newNode

            //third: since we have a new head (newNode) we need to reassign the old head to the newNode (this.head = newNode)
            this.head = newNode
            this.length += 1;
        }


    }

    addToTail(val) {
        // Your code here
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