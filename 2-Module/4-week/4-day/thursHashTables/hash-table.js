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
    // const finalHash = Number('0x' + first8);
    // // const finalHash = parseInt(first8, 16);
    // // const finalHash = parseInt('0x' + first8);

    // return finalHash;
    return Number(`0x${sha256(key).substring(0, 8)}`);
  }

  hashMod(key) {
    // console.log(this.hash(key) % this.capacity)
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    const index = this.hashMod(key);

    let curr = this.data[index];

    while (curr && curr.key !== key) {
      curr = curr.next;
    }

    if (curr) {
      curr.value = value;
    } else {
      // if curr === null
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
    // This is add to head
    const newPair = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (!this.data[index]) {
      this.data[index] = newPair;
    } else {
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }

    this.count++;
  }

  insertWithNoCollisions(key, value) {
    const newPair = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (!this.data[index]) {
      this.data[index] = newPair;
      this.count++;
    }
    //! If we want to overwrite
    // else {
    //   this.data[index] = newPair;
    // }
  }
}

module.exports = HashTable;
