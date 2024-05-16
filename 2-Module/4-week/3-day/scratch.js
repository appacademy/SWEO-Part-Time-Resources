// hashing

function simpleHash(str) {
    let hashValue = 0;

    for (let i = 0 ; i < str.length ; i++) {
      hashValue += str.charCodeAt(i);
    }
    return hashValue;
}
// console.log('yep'.charCodeAt(0))
// console.log('yep'.charCodeAt(1))
// console.log('yep'.charCodeAt(2))



// use the hash to insert data at an index within the bounds of an array's length

function hashToIndex(int){
    return int % length
}

// hash map implementation


// hash table data
class HashMap {
    constructor(numBuckets){
        this.capacity = numBuckets
        this.data = new Array(this.capacity).fill(null)
        this.count = 0
    }

    findElement(index){ // returns value at given index
        return this.data[index]
    }
}

const hash1 = simpleHash('yep')
const hash2 = simpleHash('yep')
const hash3 = simpleHash('nope')
const hash4 = simpleHash('hello world')
const hash5 = simpleHash('yep yep')
const hash6 = simpleHash('odd')

// console.log(hash1)
// console.log(hash2)
// console.log(hash3)
// console.log(hash4)
// console.log(hash5)
// console.log(hash6)

const hashMap = new HashMap(4)
const length = hashMap.capacity
const searchKey = 'odd'

let hashedKey = simpleHash(searchKey)
let index = hashToIndex(hashedKey)
// console.log(index)

// console.log(hashMap.data[index])

// console.log(hashToIndex(hash1))
// console.log(hashToIndex(hash2))
// console.log(hashToIndex(hash3))
// console.log(hashToIndex(hash4))
// console.log(hashToIndex(hash5))
// console.log(hashToIndex(hash6))


// 10 / 4 == 2.5
// 10 % 4 == 2

let key = 'name'

let hashedValue = simpleHash(key)
// console.log(hashedValue)
let hashedMod = hashToIndex(hashedValue)
// console.log(hashedMod)


// console.log(hashMap)

class KeyValuePair{
    constructor(key, value){
        this.key = key
        this.value = value
        this.next = null
    }
}


// hash collision

// intentionally generate a collision for an example of how to handle a collision
// we will use a linked list, represented by nodes to be able to insert data without overwriting a node that is already present at the same index
let index1 = hashToIndex(simpleHash('yep')) // generate an index from the hash given a string of 'yep', this string will be the key
let index2 = hashToIndex(simpleHash('nope')) // generate an index from the hash given a string of 'nope', this string will be the key

hashMap.data[2] = new KeyValuePair('yep', 5) //
// console.log(index1) // verify index1 and index2 are the same for example purposes
// console.log(index2) // verify index1 and index2 are the same for example purposes
let newKVPair = new KeyValuePair('nope', 10)
// console.log(hashMap.data[2])
newKVPair.next = hashMap.data[2]
hashMap.data[2] = newKVPair
console.log(hashMap.data)



// int 3
// string 'hello'
// boolean false
