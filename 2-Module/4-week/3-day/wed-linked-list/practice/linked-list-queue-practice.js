// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // Your code here
        let length = 0;
        if (!this.head) return length;

        let curr = this.head;
        length++;
        while (curr.next) {
            length++;
            curr = curr.next;
        }
        return length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here
        let sum = 0;
        if (!this.head) return sum;

        let curr = this.head;
        sum += curr.value;
        while (curr.next) {
            curr = curr.next;
            sum += curr.value;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here
        if (!this.head) return 0;
        return this.sumOfNodes() / this.listLength();
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here
        let curr = this.head;
        while (n && curr) {
            if (n < 0) return null;
            curr = curr.next;
            n--;
        }
        if (n === 0 && curr) return curr;
        return null;
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let curr = this.head;
        const midIndex = Math.floor(this.listLength() / 2);
        let index = 0;
        while (index < midIndex && curr) {
            if (index < 0) return null;
            curr = curr.next;
            index++;
        }
        if (index === midIndex) return curr;
        return null;
        // Write your hypothesis on the time complexity of this method here
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;
        // this.length++;
        return this;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        // Your code here
        const newList = new SinglyLinkedList();
        let curr = this.head;

        while (curr) {
            newList.addToHead(curr.value);
            curr = curr.next;
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        if (!this.head) return this;
        let curr = this.head;
        let next = curr;
        let prev = null;
        while (next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let firstPointer = this.head;
        let secondPointer = this.tail;
        let atFirst = true;

        while (firstPointer !== secondPointer) {
            if (atFirst) {
                firstPointer = firstPointer.next;
            } else {
                secondPointer = secondPointer.prev;
            }
            atFirst = !atFirst;
        }

        return firstPointer;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here
        const newList = new DoublyLinkedList();
        let curr = this.tail;

        while (curr) {
            newList.addToTail(curr.value);
            curr = curr.prev;
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        let curr = this.head;

        let prev;
        while (curr.next) {
            prev = curr;
            [curr.prev, curr.next] = [curr.next, curr.prev];
            curr = curr.prev;
        }
        this.head = curr;
        this.head.next = prev;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}