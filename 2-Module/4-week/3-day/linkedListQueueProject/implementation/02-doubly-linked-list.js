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
        // create a newNode
        // if length is 0 set head and tail to be newNode
        // this.tail.next = newNode
        // newNode.prev = this.tail
        // this.tail = newNode
        // increment the length
        let newNode = new DoublyLinkedNode(val);

        if (this.length === 0){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
        

        // Write your hypothesis on the time complexity of this method here
      

    }

    removeFromHead() {
        // Remove node at head
        // return undefined for empty list
        // grab the current head
        // if the length is 1 set head and tail to be null;
        // else this.head.next.prev = null;
        // this.head = this.head.next
        // decrement the length
        // return the old head
        if (this.length === 0) return;
        let removed = this.head;
        if (this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
            removed.next.prev = null;
            this.head = removed.next;
        }
        this.length--;
        return removed.value;

        

        // Write your hypothesis on the time complexity of this method here
        // O(1) since there is no iteration to slow us down

    }

    removeFromTail() {
        // Remove node at tail
        // if length is 0 return
        // grab the current tail
        // if length is 1, make head and tail null
        // else current.prev.next = null;
        // decrement my length
        // return current.value
        if (this.length === 0) return;
        const current = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            current.prev.next = null;
        }
        this.tail = current.prev;
        this.length--;
        return current.value;

        
        // Write your hypothesis on the time complexity of this method here
        //
    }

    peekAtHead() {
        // Return value of head node
        if (this.length === 0) return;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
   
    }

    peekAtTail() {
        // Return value of tail node
        if (this.length === 0) return;
        return this.tail.value;
       
        // Write your hypothesis on the time complexity of this method here
    
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
