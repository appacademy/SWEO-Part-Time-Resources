let sha256 = require('sha256')
// TLDR on hashtable
// an array of key/value pair where the key hashed and modded return the index at which it is stored
// every key value pair has a next pointer in the case of the hash/mod returning the same index
// if collision occurs do an add to head style insert



// What is a Hashing function??

/*
A hash function takes in an input, runs it through a set of deterministic steps, and returns a scrambled output. 
Given the same input, it will ALWAYS return the same output.
*/

// Hashing function example
// let arr = [null,null,null,null,null,null,null,null,null,null]
// const baylenHash = (str) => {
//     let hash = 0
//     for(let i = 0; i < str.length; i++){
//         // console.log(str.charCodeAt(i))
//         hash+= str.charCodeAt(i)
//     }
//     return hash
// }

// let getIndex = (key) => {
//     return baylenHash(key) % arr.length
// }

// class KeyValue {
//     constructor(key, value){
//         this.key = key
//         this.value = value
//         this.next = null
//     }

// }
// let keyVal = new KeyValue('Key', 'Baylen')
// let keyVal2 = new KeyValue('Key', 'James')

// let index = getIndex(keyVal.key)
// let index2 = getIndex(keyVal2.key)
// console.log(index, index2)
// arr[index] = keyVal
// if(arr[index2] !== null){
//     keyVal2.next = arr[index2]
//     arr[index2] = keyVal2
// }

// console.log(arr)
// Plain old javascript objects with 
/*
Underneath the hood, a hash table is simply an array with its elements indexed by a hashed key. 
The key hash is then run through a modulo function which converts it to an array index.

*/


// How do we create a hash table with code??

// First step is to initialize an array of empty space

data = [null, null, null, null, null, null, null, null]

// Next, you need a hash function which converts keys to integers

// we will use baylenHash

// now we need a function that will convert our hashes into a valid index
/*Finally, you will need a function to convert the key hash into a valid array index. 
Since the hash function returns an integer, you can use the modulo operator for this purpose. */

// const hashToKey = (key) => {
//     return baylenHash(key) % data.length;
// }

// // console.log(hashToKey('1'))
// // console.log(hashToKey('10'))


// // inserting into a hash table
// // first we create a class to hold our key and value
// class KeyValuePair {
//     constructor(key, value) {
//       this.key = key;
//       this.value = value;
//       this.next = null
//     }
// }

// class HashTable{
//     constructor(numOfBuckets = 4){
//         this.count = 0
//         this.capacity = numOfBuckets
//         this.data = this.buildBuckets(numOfBuckets)

//     }
//     buildBuckets(num){
//         let arr = []
//         for(let i = 0; i < num; i++){
//                 arr.push(null)
//         }
//         return arr
//     }
//     increaseCapacity(num){
//         let arr= []
//         for(let i = 0 ; i < num; i++){
//             if(this.data[i]){
//                 arr.push(this.data[i])
//             }else{
//                 arr.push(null)
//             }
//         }
//         return arr
//     }
//     increaseCount(){
//         this.count++
//         console.log(this.count, this.capacity)
//         console.log(this.data)
//         if(this.count === this.capacity){
//             this.data = this.increaseCapacity(this.capacity + 4)
//             this.capacity = this.data.length
//         }
//     }
//     hash(key){
//         return parseInt(sha256(key).slice(0, 8), 16)
//     }
//     hashMod(key){
//         return this.hash(key) % this.data.length
//     }
//     insert(key, value){
//         let newKeyVal = new KeyValuePair(key, value)
//         let index = this.hashMod(newKeyVal.key)
//         let mapLocation = this.data[index]
//         if(mapLocation === null){
//             this.data[index] = newKeyVal
//             this.increaseCount()
//         }else{
//             newKeyVal.next = this.data[index]
//             this.data[index] = newKeyVal
//             this.increaseCount()
//         }
//     }
//     printHash(){
//         console.log(this.data)
//     }
// }

// let hashTable = new HashTable()

// let myObj = {
//     1: 'val1',
//     2: 'val2',
//     3: 'val3',
//     4: 'val4',
//     5: 'val5',
//     6: 'val6',
//     7: 'val7',
//     8: 'val8'
// }
// const insertIntoHash = (obj) => {
//     for(let key in obj){
//         let value = obj[key]
//         hashTable.insert(key, value)
//     }
// }
// insertIntoHash(myObj)
// hashTable.printHash()





let mySet = new Set([1,2,3,4,5,6,8,8,8,8,8,8,8,8,8,8])
// let myDuplicateRemoved = new Array(...mySet)
// console.log(myDuplicateRemoved)
mySet.add('Anything')
mySet.add('something else')
mySet.delete('something else')
console.log(mySet.has('Anything'))
console.log(mySet.length)

