const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val)
        const oldTail = this.tail
        this.length++
        // Your code here
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return this.length
        }

        this.tail.next = newNode
        this.tail = newNode
        return this.length

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(!this.head) return null
        // Your code here
        const oldHead = this.head
        this.head = oldHead.next

        if(!this.head) this.tail = null
        
        this.length--

        return oldHead.value
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}