const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // the first solution is not dry, but is every step we would take for each case.
        // the second solution is the dry code.

        // Option 1
        // // Add node to end of queue (linked list)
        // // create newNode
        // // if queue is empty make head and tail the newNode
        // // if queue has length of 1 assign this.head.next to be newNode
        // // if queue has length greater than 1 assign the .next of current tail to be newNode
        // // assign this.tail to be newNode;
        // // increment the length
        // // return length

        // const newNode = new SinglyLinkedNode(val);
        // if (this.length === 0) {
        //     this.head = newNode;
        //     this.tail = newNode;
        //     this.length++;
        //     return this.length;
        // } else if (this.length === 1) {
        //     this.head.next = newNode;
        //     this.tail = newNode;
        //     this.length++;
        //     return this.length;
        // } else {
        //     this.tail.next = newNode;
        //     this.tail = newNode;
        //     this.length++;
        //     return this.length;
        // }

        // Option 2
        // create a newNode
        // if the length is 0, this.head and this.tail = newNode
        // if the length is 1, update this.head.next = newNode;
        // else we want to update this.tail.next = new node;
        // increment this.length;
        // return this.length;
        const newNode = new SinglyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
        } else if (this.length === 1) {
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
        // the first solution is not dry, but is every step we would take for each case.
        // the second solution is the dry code.

        // Option 1
        // // Remove node from front of queue (linked list)
        // // if length is 0 return undefined
        // // if length is 1 this.head and this.tail = null
        // // if length is 2 or more this.head = this.head.next
        // // decrement the length
        // // return old head

        // if (this.length === 0) return null;
        // let dequeued = this.head;

        // if (this.length === 1){
        //     this.head = null;
        //     this.tail = null;
        //     this.length--;
        //     return dequeued.value;
        // } else {
        //     this.head = this.head.next;
        //     this.length--;
        //     return dequeued.value;
        // }
        

        // Option 2
        // if length is 0 return null
        // set this.head to variable
        // if length is 1 this.head and this.tail = null
        // else this.head = this.head.next
        // decrement the length;
        // return the value of the old head
        // 1 -> 2 -> 3 // this.head = 1 and 1.next = 2
        // 1 // this.head = 1 and 1.next = null

        if (this.length === 0) return null;
        let dequeued = this.head;
        if (this.length === 1) {
            this.tail = null 
        } 
        this.head = this.head.next // when the length is 1, this.head.next will be null so this line will acheive what we want for all lengths > 0.
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
