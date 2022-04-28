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
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        if(!this.tail) return this.addToHead(val)
        let newNode = new DoublyLinkedNode(val)
        let oldTail = this.tail
        newNode.prev = oldTail
        oldTail.next = newNode
        this.tail = newNode
        this.length++
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) return undefined
        if(this.length == 1) {
            let oldHead = this.head
            this.head = null
            this.tail= null
            this.length --
            return oldHead.value
        }
        let oldHead = this.head
        let newHead = this.head.next
        newHead.prev = null
        oldHead.next = null
        this.head = newHead
        this.length --
        return oldHead.value
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.tail) return undefined
        if(this.length === 1) return this.removeFromHead()
        let oldTail = this.tail
        let newTail = this.tail.prev
        oldTail.prev = null
        newTail.next = null
        this.tail = newTail
        this.length --
        return oldTail.value

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(!this.head) return undefined
        return this.head.value
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(!this.tail) return undefined
        return this.tail.value
        // Write your hypothesis on the time complexity of this method here
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

let doubleList = new DoublyLinkedList()
doubleList.addToHead(1)
doubleList.addToHead(2)
doubleList.addToHead(3)
doubleList.addToHead(4)
doubleList.print()



module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
