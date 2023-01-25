const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
// Hashing - map arbitrary data to a deterministic, fixed-size output
  // the same input will always return the same output
  // unlike encryption, hashing only works one way and can't be decrypted

//SimpleHash
function simpleHash(str) {
  let hashValue = 0;

  for( let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}
//SHA256 - Secure Hashing Algorithm
  // 64 - 4bit hexadecimal
  // 256bits => 2^256 
// console.log(sha256('Hello, world!'))
// console.log(sha256('ABC'))
// console.log(sha256('Tristan'))
// console.log(sha256('Hello, world!'))

class HashTable {
  constructor(size = 8) {
    this.data = new Array(size).fill(null);
  }
  // Hash Modulo
  hashMod(val) {
    return simpleHash(val) % this.data.length;
  }
  // Inserting Key/Vals
  insert(key, val) {
    let newKeyVal = new KeyValuePair(key, val);
    let index = this.hashMod(key);

    if (this.data[index]) {
      this.data[index].next = newKeyVal
    } else {
      this.data[index] = newKeyVal;
    }
  }
  read(key) {
    return this.data[this.hashMod(key)]
  }
}
let hs = new HashTable();
// console.log(simpleHash("key"));            // 329
// console.log(hs.hashMod("key"));         // 1
hs.insert('key', 'value');
// console.log(simpleHash("new key"));        // 691
// console.log(hs.hashMod("new key"));     // 3
hs.insert('new key', 'new value')
// console.log(simpleHash("App Academy"));    // 1013
// console.log(hs.hashMod("App Academy")); // 5
hs.insert('App Academy', 'Programming Bootcamp')
// console.log(simpleHash("She sells seashells by the seashore..."));     // 3495
// console.log(hs.hashMod("She sells seashells by the seashore..."));  // 7
// console.log(hs.data)
// console.log(hs.read('key'))
// console.log(hs.read('key1'))
// console.log(hs.read('new key'))

hs.insert('key1', 'value');
console.log(hs.data);
hs.insert('key9', 'value');
console.log(hs.data);

// Hash Collisions - When two keys hash to the same index (bucket);
