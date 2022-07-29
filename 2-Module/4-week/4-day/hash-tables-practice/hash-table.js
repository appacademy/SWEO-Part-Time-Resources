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
    this.count = 0; // basically keeping track of the amount of items in the table
    this.capacity = numBuckets; // the total number of buckets we want to have
    this.data = new Array(this.capacity).fill(null); // create a new array with capacity number of 
    // spaces in memory allocated and change the value of all of those from undefined to null
  }

  hash(key) {
    let hash = sha256(key); // create our 64 digit hex num
    hash = hash.slice(0,8); // only use the first 8 digits of that hex
    const decimal = parseInt(hash, 16); // change the hex to a decimal num
    return decimal; // return that num
  }

  hashMod(key) {
    let hashedKey = this.hash(key); // get our hashed key 
    return hashedKey % this.capacity; // get the index in which we want to insert the kvp.
  }

  insert(key, value) {
    const kvp = new KeyValuePair(key, value); // create our new key value pair
    let i = this.hashMod(key); // get our index

    // 2 -> 3
    // this.data[i] = 2; (2.next = 3, 3.next = null)
    // newKvp = 6;
    // 6.next = 2
    // 6 -> 2 -> 3
    // this.data[i] = 6;
    // newKvp = 32
    // 32.next = 6
    // 32 -> 6 -> 2 -> 3
    // this.data[i] = 32;

    if (!this.data[i]){ // check if the bucket is empty
      this.data[i] = kvp; // if it is add our kvp (its next will be null so it will be the tail)
    } else {
      kvp.next = this.data[i]; // else add whatever is already in the bucket to be the .next of our new kvp
      this.data[i] = kvp; // then replace the previous value with our new one
    }
    this.count++; // increment our count
  }

}

// TO DEBUG
// copy the entire test case from your test file
// change every 'expect' to be a console.log
// comment out the .to.equal so you know what your console.log should return

let hashTable = new HashTable(2);
hashTable.insert("key-1", "val-1");
hashTable.insert("key-2", "val-2");
hashTable.insert("key-3", "val-3");

console.log(hashTable.count)//.to.equal(3);
console.log(hashTable.capacity)//.to.equal(2);
console.log(hashTable.data.length)//.to.equal(2);

const pairC = hashTable.data[0];
const pairB = hashTable.data[1];
const pairA = hashTable.data[0].next;

console.log(pairA.key)//.to.equal("key-1");
console.log(pairA.value)//.to.equal("val-1");

console.log(pairB.key)//.to.equal("key-2");
console.log(pairB.value)//.to.equal("val-2");

console.log(pairC.key)//.to.equal("key-3");
console.log(pairC.value)//.to.equal("val-3");

module.exports = HashTable;