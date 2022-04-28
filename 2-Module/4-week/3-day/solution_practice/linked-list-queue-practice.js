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
        this.length = 0
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        return this.length
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0
        let curr = this.head
        while(curr){
            sum+=curr.value
            curr = curr.next
        }
        return sum
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        let sum = 0
        let curr = this.head
        while(curr){
            sum+=curr.value
            curr = curr.next
        }
        return sum / this.length
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let i = 0
        let curr = this.head
        while(curr){
            if(i === n) return curr
            curr = curr.next
            i++
        }

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // if(this.length === 3){
        //     return this.head.next
        // }
        // // Returns the middle node
        // // Implement this as a singly linked list then as a doubly linked list
        //     // How do the implementation for singly and doubly vary if at all?
        // let n = this.length / 2
        // n = Math.floor(n) -1
        // // console.log(n)
        // let i = 0
        // let curr = this.head
        // while(curr){
        //     if(i === n) return curr
        //     curr = curr.next
        //     i++
        // }
        // // Write your hypothesis on the time complexity of this method here
        let mid = Math.ceil(this.length / 2);
        console.log(this.findNthNode(mid - 1).value)
        return this.findNthNode(mid - 1);
    }

    pop(){
        if(this.length === 1){
            let oldHead = this.head
            this.head = null
            this.length --
            return oldHead
        }
        let current = this.head
        let poppedNode;
        while(current){
            if(current.next.next === null){
                poppedNode = current.next
                current.next = null
            }
            current = current.next
        }
        this.length --
        return poppedNode
    }
    reverse() {
        // Returns a new reversed version of the linked list
        let newList = new SinglyLinkedList()
        let length = this.length
        let i = 0
        while(i < length ){
            let node = this.pop()
            newList.addToTail(node.value)
            i++
        }
        return newList

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let arr = []
        let length = this.length
        for(let i = 0; i < length; i++){
            arr.push(this.pop())
        }
        for(let i = 0; i < arr.length; i++){
           this.addToTail(arr[i].value)
        }
        return this
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
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    findNthNode(n) {
        // Returns the node at the nth index from the head
        let i = 0
        let curr = this.head
        while(curr){
            if(i === n) return curr
            curr = curr.next
            i++
        }

        // Write your hypothesis on the time complexity of this method here
    }
    pop(){
        if(this.length === 1){
            let oldHead = this.head
            this.head = null
            this.length --
            return oldHead
        }
        let current = this.head
        let poppedNode;
        while(current){
            if(current.next.next === null){
                poppedNode = current.next
                current.next = null
            }
            current = current.next
        }
        this.length --
        return poppedNode
    }
    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++
        return this.head;
    }

    findMid() {
        let mid = Math.ceil(this.length / 2);
        return this.findNthNode(mid -1);
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let newList = new SinglyLinkedList()
        let length = this.length
        let i = 0
        while(i < length ){
            let node = this.pop()
            newList.addToTail(node.value)
            i++
        }
        return newList

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let arr = []
        let length = this.length
        for(let i = 0; i < length; i++){
            arr.push(this.pop())
        }
        for(let i = 0; i < arr.length; i++){
           this.addToTail(arr[i].value)
        }
        return this
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
