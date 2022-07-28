const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        // create newNode
        // if queue is empty make head and tail the newNode
        // if queue has length of 1 assign this.head.next to be newNode
        // if queue has length greater than 1 assign the .next of current tail to be newNode
        // assign this.tail to be newNode;
        // increment the length
        // return length
        const newNode = new SinglyLinkedNode(val);
        if (this.length === 0){
            this.head = newNode;
        } else if (this.length === 1){
            this.head.next = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
        // this is O(1) time. Nothing here to slow us down.
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        // if length is 0 return undefined
        // if length is 1 this.head and this.tail = null
        // if length is 2 or more this.head = this.head.next
        // decrement the length
        // return old head
        if (this.length === 0) return null;
        let dequeued = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return dequeued.value;
        
        // Write your hypothesis on the time complexity of this method here
        // this is O(1) time. Nothing here to slow us down.

    }

}

// let queue = new Queue();
// console.log(queue)
// queue.enqueue('A');
// console.log(queue.head.value)//.to.equal('A');

module.exports = {
    Queue,
    SinglyLinkedNode
}
