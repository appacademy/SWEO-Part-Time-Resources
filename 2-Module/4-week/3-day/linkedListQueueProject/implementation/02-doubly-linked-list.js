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
        // 1 -> 2 -> 3 -> 4
        // create a newNode
        // if length is 0 this.head and this.tail = newNode
        // else set the next property of the current tail to be my newNode
        // set the prev property of my newNode to be the current tail
        // update this.tail to be the newNode
        // increment length
        let newNode = new DoublyLinkedNode(val);

        if (this.length === 0){
            this.head = newNode;
        } else {
            // these 2 steps are what add the node to the list
            this.tail.next = newNode; // tell the list that 4 comes after 3
            newNode.prev = this.tail; // tell the list that 3 comes before 4
        }
        this.tail = newNode;
        this.length++;
    }

    removeFromHead() {
        // if length is 0 return undefined
        // grab the current head
        // if length is 1 set both head and tail to be null
        // reassign the head to be this.head.next
        // update this.head.prev = null;
        // decrement the length
        // return the value from the head
        // 1 -> 2 -> 3
        if (this.length === 0) return;

        let removed = this.head;
        if (this.length === 1) {
            this.tail = null;
        } else {
            removed.next.prev = null;
        }
        this.head = removed.next;
        this.length--;
        return removed.value;

    }

    removeFromTail() {
        // if length is 0 return undefined
        // grab the tail
        // if length is 1 set this.head to be null and this.tail to be null;
        // set the .next property of the node that came before the tail (this.tail.prev) to be null;
        // update our length
        // return the value of the removed item
        if (this.length === 0) return;
        let removed = this.tail
        if (this.length === 1){
            this.head = null;
        } else {
            removed.prev.next = null;
        }
        this.tail = removed.prev;
        this.length--;
        return removed.value;

    }

    peekAtHead() {
        if (this.length === 0) return;
        return this.head.value;
    }

    peekAtTail() {
        if (this.length === 0) return;
        return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
