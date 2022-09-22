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
        // time complexity is O(1)
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here
        const newNode = new DoublyLinkedNode(val)

        if(this.length >= 1){
            this.tail.next = newNode
            newNode.prev = this.tail
        } else {
            this.head = newNode
        }
        this.tail = newNode
        this.length++

        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(1)
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) return
        // Your code here
        const oldHead = this.head
        this.head = oldHead.next
        if(this.head){
            this.head.prev = null
        }
        this.length--
        return oldHead.value
       // time complexity is O(1)
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.tail) return

        const oldTail = this.tail
        this.tail = this.tail.prev
        if(this.tail){
            this.tail.next = null
        }
        this.length--
        return oldTail.value
        // Your code here
// time complexity is O(1)
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(!this.head) return
        return this.head.value
        // Your code here
// time complexity is O(1)
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(!this.tail) return
        return this.tail.value
        // Your code here
// time complexity is O(1)
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}