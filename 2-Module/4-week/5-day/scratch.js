const sha256 = require('sha256')
// // Linked List Review
// // singly
// class SingleLinkNode{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedListSingle{
//     constructor(){
//         this.head = null
//         this.length = 0
//     }
//     addToHead(val){
//         let newHead  = new SingleLinkNode(val)
//         let oldHead = this.head
//         newHead.next = oldHead
//         this.head = newHead
//         this.length++
//     }
//     addToTail(val){
//         let newTail = new SingleLinkNode(val)
//         if(!this.head){
//             console.log('Empty List')
//             this.addToHead(val)
//             return val
//         }
//         if(this.length === 1){
//             console.log('Lenght Is one')
//             this.head.next = newTail
//             this.length++
//             return val
//         }
//         let current = this.head
//         console.log('More Than one')
//         while(current){
//             if(current.next.next === null){
//                 let oldTail = current.next
//                 oldTail.next = newTail
//                 this.length++
//                 return val
//             }
//             current = current.next
//         }
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.value)
//             current = current.next
//         }
//         return 'Printed'
//     }
// }

// let linkedList = new LinkedListSingle()
// linkedList.addToTail(1)
// linkedList.addToTail(2)
// linkedList.addToTail(3)
// linkedList.addToTail(4)
// console.log(linkedList.print())
// doubley
// class DoubleLinkNode{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }
// class DoubleLinkList{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     addToHead(val){
//         let newNode = new DoubleLinkNode(val)
//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             let oldHead = this.head
//             newNode.next = oldHead
//             oldHead.prev = newNode
//             this.head = newNode
//         }
//     }
//     addToTail(val){
//         if(!this.tail){
//             this.addToHead(val)
//             return val
//         }
//         let newNode = new DoubleLinkNode(val)
//         let oldTail = this.tail
//         oldTail.next = newNode
//         newNode.prev = oldTail
//         this.tail = newNode
//         return val
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.value)
//             current = current.next
//         }
//         return "Printed"
//     }
// }
// let doubleList = new DoubleLinkList()
// doubleList.addToTail(1)
// doubleList.addToTail(2)
// doubleList.addToTail(3)
// doubleList.addToTail(4)
// doubleList.print()
// Space complexity of the Linked List and set 
// Both O(n), linked list because you have to make n new nodes for the length of the list
// Set, although duplicate value dont get added, we can assume worst case scenario means 
// that there are no duplicates, then it would be O(n) because we have to add every single number to the set
// Set review 

// let newSet = new Set()
// newSet.add('Some value')
// newSet.add(1)
// newSet.add(2)
// newSet.add(3)
// newSet.add(4)
// newSet.add(5)
// console.log(newSet.has('Some value'))
// console.log(newSet)
// console.log(newSet.size)
// // newSet.clear()
// newSet.delete('Some value')
// console.log(newSet)




// // Has table lookup time.
// // because collisions are so rare we say the average lookup time is constant, all we need is the hashed key and it will point to the index where the info lives
// // when a collision occurs we handle it by treating each bucket like a linked list.

// // collisions occur when we try to assign to the same bucket,  what would make that happen?

// class KeyValuePair{
//     constructor(key, value){
//         this.key = key
//         this.value = value
//     }
// }

// class HashTable{
//     constructor(numOfBuckets = 4){
//         this.count = 0
//         this.capacity = numOfBuckets
//         this.data = new Array(numOfBuckets).fill(null)
//     }
//     hash(key){
//         return parseInt(sha256(key).slice(0, 8), 16)
//     }
//     hashMod(key){
//         return this.hash(key) % this.data.length
//     }
//     checkEveryKey(startValue, key, value){
//         while(startValue){
//             if(startValue.key === key){
//                 startValue.value = value
//                 return true
//             }
//             startValue = startValue.next
//         }
//         return false
//     }
//     insert(key, value){
//         let newKeyValue = new KeyValuePair(key, value)
//         let index = this.hashMod(newKeyValue.key)
//         if(this.data[index] === null){
//             this.data[index] = newKeyValue
//             this.count++
//         }else{
//             if(!this.checkEveryKey(this.data[index], key, value)){
//                 newKeyValue.next = this.data[index]
//                 this.data[index] = newKeyValue
//             }
//         }
//     }
//     print(){
//         console.log(this.data)
//     }
    
// }

// let hashTable = new HashTable()
// hashTable.insert('key1', 'Baylen')
// hashTable.insert('key2', 'James')
// hashTable.insert('key3', 'Zaviar')
// hashTable.insert('key2', 'George')
// hashTable.print()


// class SingleLinkNode{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// Example of Queue using linked List
// class LinkedListSingle{
//     constructor(){
//         this.head = null
//         this.length = 0
//     }
//     enqueue(val){
//         let newNode = new SingleLinkNode(val)
//         if(!this.head){
//             // console.log('Empty List')
//             this.head = newNode
//             this.length++
//             return val
//         }
//         if(this.length === 1){
//             // console.log('Lenght Is one')
//             this.head.next = newNode
//             this.length++
//             return val
//         }
//         let current = this.head
//         // console.log('More Than one')
//         while(current){
//             if(current.next.next === null){
//                 let oldTail = current.next
//                 oldTail.next = newNode
//                 this.length++
//                 return val
//             }
//             current = current.next
//         }
//     }
//     dequeue(){
//         let valToLeave = this.head.value
//         this.head = this.head.next
//         return valToLeave
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.value)
//             current = current.next
//         }
//         return 'Printed'
//     }
// }

// let queue = new LinkedListSingle()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.print()
// console.log('Removed Value: ',  queue.dequeue())
// console.log('Removed Value: ',  queue.dequeue())
// queue.print()

// Example of Stack using Linked List
class SingleLinkNode{
        constructor(value){
            this.value = value
            this.next = null
        }
    }
    class LinkedListSingle{
        constructor(){
            this.head = null
            this.length = 0
        }
        addToStack(val){
            let newHead  = new SingleLinkNode(val)
            let oldHead = this.head
            newHead.next = oldHead
            this.head = newHead
            this.length++
        }
        removeFromStack(){
            let valueToRemove = this.head.value
            this.head = this.head.next
            return valueToRemove
        }
        print(){
            let current = this.head
            while(current){
                console.log(current.value)
                current = current.next
            }
            return 'Printed'
        }
}

let newStack = new LinkedListSingle()
newStack.addToStack(1)
newStack.addToStack(2)
newStack.addToStack(3)
newStack.addToStack(4)
console.log("Removed Value : ", newStack.removeFromStack())
console.log("Removed Value : ", newStack.removeFromStack())
newStack.print()