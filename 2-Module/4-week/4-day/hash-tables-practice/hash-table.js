const sha256 = require('js-sha256');

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0; // just like the length with linked lists
    this.capacity = numBuckets; // this is the number of buckets we want to reserve in memory
    this.data = new Array(this.capacity).fill(null); // create a new array with capacity number of buckets reserved in memory and fill those buckets with null
  }

  hash(key) {
    let hash = sha256(key); // returns 64 digit hex num
    hash = hash.slice(0,8); // grab the first 8
    const decimal = parseInt(hash, 16) // convert to a decimal
    return decimal; // return it
  }

  hashMod(key) {
    let hashedKey = this.hash(key); // get our decimal value of our key
    return hashedKey % this.capacity; // return the modulo of that key to use as an index
  }

  insert(key, value) {
    let kvp = new KeyValuePair(key, value); // create our key value pair to be stored
    let i = this.hashMod(key); // find the index we should add it into our data
    if (!this.data[i]){ // check to see if something is already there, if not
      this.data[i] = kvp; // reassign the value of this.data[i] to be our new kvp
      this.count++; // increment our count!
    } else {
      kvp.next = this.data[i]; // else we want to link the current element to our newly created element using the new elements .next property
      this.data[i] = kvp; // then reassign the value of that index to be our new element
      this.count++; // increment our count again!
    }
  }

}

// TO DEBUG
// Copy the entire test case over and change all the 'expects' to console.logs then comment out
// the .to.equals so you know what you expect to get back!

// let hashTable = new HashTable(2);
// hashTable.insert("key-1", "val-1");
// hashTable.insert("key-2", "val-2");
// hashTable.insert("key-3", "val-3");

// console.log(hashTable.count)//.to.equal(3);
// console.log(hashTable.capacity)//.to.equal(2);
// console.log(hashTable.data.length)//.to.equal(2);

// const pairC = hashTable.data[0];
// const pairB = hashTable.data[1];
// const pairA = hashTable.data[0].next;

// console.log(pairA.key)//.to.equal("key-1");
// console.log(pairA.value)//.to.equal("val-1");

// console.log(pairB.key)//.to.equal("key-2");
// console.log(pairB.value)//.to.equal("val-2");

// console.log(pairC.key)//.to.equal("key-3");
// console.log(pairC.value)//.to.equal("val-3");


module.exports = HashTable;