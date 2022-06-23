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
    // fill this in
  }

  hash(key) {
    // fill this in
  }

  hashMod(key) {
    // fill this in
  }

  insert(key, value) {
    // fill this in
  }

}


module.exports = HashTable;