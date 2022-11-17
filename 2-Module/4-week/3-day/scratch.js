// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here
        const newNode = new SinglyLinkedNode(val)
        newNode.next = this.head;
        this.head = newNode
        this.length++

        return this

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = current.next;
        }
        curr.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if(!this.head) return;

        let oldHead = this.head;

        this.head = oldHead.next;
        this.length--;

        return oldHead

        // Write your hypothesis on the time complexity of this method here
        //O1 constant
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if(!this.head) return;

        let curr = this.head;
        let prev;
        while(curr.next){
            prev = curr
            curr = curr.next
        }
        if(!prev) {
            this.head = null
        } else{
            prev.next = null;
        }
        this.length--;
        return curr;

        // Write your hypothesis on the time complexity of this method here
        //On
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here
        if(!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here
        if (!this.head) return;
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }

        // Write your hypothesis on the time complexity of this method here
        //On
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}

// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    //O1
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here
        let newNode = new DoublyLinkedNode(val);
        if (this.length >= 1) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {

        this.head = newNode;
        this.tail = newNode
        }
        this.length++

        // Write your hypothesis on the time complexity of this method here
    //O1
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if(!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;
        if(this.head) this.head.prev = null

        this.length--;
        return oldHead.value

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if(!this.tail) return;


        const oldTail = this.tail;
        this.tail = oldTail.prev;
        if(this.tail) this.tail.next = null

        this.length--;
        return oldTail.value
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Your code here
        if(!this.head) return;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        // Your code here
        if(!this.tail) return;
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}


const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        // Your code here
        const newNode = new SinglyLinkedNode(val)
        this.length++;

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this.length
        }
        this.tail.next = newNode
        this.tail = newNode;
        return this.length

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        // Your code here
        if(!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;

        if(!this.tail) {
            this.tail = null
        }

        this.length--
        return oldHead.value

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
