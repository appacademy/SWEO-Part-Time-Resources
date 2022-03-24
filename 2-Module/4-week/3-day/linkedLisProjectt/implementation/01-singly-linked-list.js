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
        let newNode = new SinglyLinkedNode(val)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val)
        if(!this.head){
            this.head = newNode
            this.length++
            return this
        }
        // first we need to create a variable that is a newNode
        // find the current tail, and add the new node to the tail
        // create a variable that i equal to the head
        let current = this.head
        // while current is not falsy
        while(current){
            // check if current.next is null, telling we that we found the tail
            if(current.next === null){
                // say that my current .next is my new node
                current.next = newNode
                break
            }
            // if the current.next is not cull, we need to move to the next node in the list
            current = current.next
        }
        this.length++
        return this
    }

    removeFromHead() {
        if(!this.head){
            return undefined
        }
        // Remove node at head
        let oldHead = this.head
        let newHead = oldHead.next
        this.head = newHead
        this.length --
        return oldHead
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if(!this.head){
            return undefined
        }
        if(this.length ===1){
            return this.removeFromHead()
        }
        // Remove node at tail
        let curr = this.head
        let oldTail;
        let newTail;
        while(curr){
            if(curr.next.next === null){
                oldTail = curr.next
                newTail = curr
                break
            }
            curr = curr.next
        }
        newTail.next = null
        this.length -- 
        return oldTail
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(!this.head) return undefined
        return this.head.value
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
