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
        const newNode = new SinglyLinkedNode(val);

        if (this.head){
            newNode.next = this.head
        }
        this.head = newNode;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // this is all O(1) timing. There are no factors that would cause this to take longer.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // this is O(n) because we have to loop through the list to find the tail.
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined;
        else {
            const removed = this.head;
            this.head = this.head.next;
            this.length--;
            return removed;
        }

        // Write your hypothesis on the time complexity of this method here
        // this is O(1). There is nothing here to slow the function down.
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return undefined;
        let current = this.head;
        if (this.length === 1){
            this.head = null;
            this.length--;
            return current;
        }
        else {
            while (current.next.next){
                current = current.next;
            }
            let removed = current.next;
            current.next = null;
            this.length--;
            return removed;
        }

        // Write your hypothesis on the time complexity of this method here
        // this is O(n) since we have to loop through the list.
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // this is O(1) because there's nothing to slow us down.
    }

    print() {
        // Print out the linked list
        if (this.length === 0) return;
        else {
            let current = this.head;
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
        // Write your hypothesis on the time complexity of this method here
        // this is O(n) because we have to loop through the entire list.
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
