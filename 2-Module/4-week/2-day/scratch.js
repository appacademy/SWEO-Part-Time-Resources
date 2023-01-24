const sha256 = require('js-sha256');
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
// Hashing
  // Maps arbitrary data to a deterministic, fixed-size output;
    // Hashing returns the same output for the same input;
    // Hashing, unlike encryption, only works one way.
// SimpleHash
function simpleHash(str) {
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}
// SHA256 - Secure Hashing Algorithm
// console.log(sha256("Hello, world!"));
// // '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3'
// console.log(sha256("ABC"));
// // 'b5d4045c3f466fa91fe2cc6abe79232a1a57cdf104f7a26e716e0a1e2789df78'
// console.log(sha256("ABCDEF"));
// // 'e9c0f8b575cbfcb42ab3b78ecc87efa3b011d9a5d10b09fa4e96f240bf6a82f5'
// console.log(sha256("ABBEEF"));
// // 'cafd8090e01c3d9c886428dec6128a19416675d615a26211caf1c5721641bc1f'
// console.log(sha256("Hello, world!"));
// // '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3'

class HashTable {
  constructor(defaultSize = 8) {
    this.data = new Array(this.capacity).fill(null);
    this.capacity = defaultSize;
  }
  // Hash Modulo
  hashMod(key) {
    return simpleHash(key) % this.data.length;
  }
  // Inserting Key/Vals
  insert(key, value) {
    let keyVal = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    
    if (this.data[index]) {
      let curr = this.data[index];

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = keyVal;
    } else {
      this.data[index] = keyVal;
    }
  }
  // Reading Key/Vals
  retrieve(key) {
    return this.data[this.hashMod(key)];
  }
}

// // Same input, same output
// console.log('simplehash: ', simpleHash("Hello, world!"));  // 1161
// console.log('simplehash: ', simpleHash("Hello, world!"));  // 1161

// // Different input, different output
// console.log('simplehash: ', simpleHash("ABC"));            // 198
// console.log('simplehash: ', simpleHash("abc"));            // 294

// // Some different inputs can lead to the same outputs
// console.log('simplehash: ', simpleHash("ABCDEF"));         // 405
// console.log('simplehash: ', simpleHash("ABBEEF"));         // 405
// console.log('simplehash: ', simpleHash("zbeT"));           // 405

let hs = new HashTable();
console.log(hs.hashMod('hello world'))
console.log(hs.hashMod('key'))
hs.insert('hello world', 'programming');
hs.insert('key', 'value');
console.log(hs.retrieve('key'));
hs.insert('key1', 'first');
hs.insert('key9', 'second');
console.log(hs.data)

let hs2 = new HashTable(16);
hs2.insert('key1', 'first');
hs2.insert('key9', 'second');
console.log(hs2.data)
