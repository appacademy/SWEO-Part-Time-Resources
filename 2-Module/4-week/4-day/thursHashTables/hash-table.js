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
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    // const myHash = sha256(key);
    // const first8 = myHash.slice(0, 8);
    // const myHexHash = Number('0x' + first8);
    // // const myHexHash1 = parseInt(first8, 16);
    // // const myHexHash2 = parseInt('0x' + first8);
    // return myHexHash;

    return Number(`0x${sha256(key).slice(0, 8)}`);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    const index = this.hashMod(key);

    let currentPair = this.data[index];

    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    if (currentPair) {
      currentPair.value = value;
    } else {
      // currentPair was null => we do NOT have this key/val in our LL
      const newPair = new KeyValuePair(key, value);

      if (!this.data[index]) {
        this.data[index] = newPair;
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }
      this.count++;
    }
  }

  insertWithCollisions(key, value) {
    // addToHead
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    if (!this.data[index]) {
      this.data[index] = newPair;
    } else {
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }

    this.count++;
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);

    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    }
  }
}

module.exports = HashTable;
