const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        let newNode = new SinglyLinkedNode(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else if(this.length === 1){
            this.head.next = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this.length
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        let removed
        if(!this.head) return null
        if(this.length === 1){
            removed = this.head
            this.head = null
            this.tail = null
        }else{
            removed = this.head
            this.head = this.head.next
        }
        this.length -- 
        return removed.value
        
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
