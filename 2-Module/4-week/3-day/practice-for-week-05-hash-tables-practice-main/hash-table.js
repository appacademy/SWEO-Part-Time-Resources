const sha256 = require('js-sha256');

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
		// this.data = [null, null]
		// this.data = [];
		// for(let i = 0; i < capacity; i++) {
		// 	this.data.push(null);
		// }
		this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
	let value = sha256(key).slice(0,8);
    return parseInt(value, 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let pair = new KeyValuePair(key, value);
    let slot = this.hashMod(key);
    if(!this.data[slot]) {
      this.data[slot] = pair;
      this.count++;
    }
    else throw new Error('hash collision or same key/value pair already exists!');

    // if (this.count < this.data.length) {
    //   let pair = new KeyValuePair(key, value);
    //   let index = this.data.findIndex(ele => ele === null);
    //   this.data[index] = pair;
    //   this.count++;
    // } else throw new Error(`hash collision or same key/value pair already exists!`);

  } // time o(1), space o(1)

  insertWithHashCollisions(key, value) {
	 const index = this.hashMod(key);

	 const newPair = new KeyValuePair(key, value)

	 if(!this.data[index]) {
		this.data[index] = newPair
	 } else {
		newPair.next = this.data[index]
		this.data[index] = newPair
	 }

	 this.count++
  } // time o(1), space o(n)

  insert(key, value) {
	const index = this.hashMod(key);

    let currentPair = this.data[index];

    // iteration to check if same key already exists
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    if (currentPair) {
      // if truthy, the same key exists so update value
      currentPair.value = value;
    } else {
      // equivalent to add to head for a linked list
      const newPair = new KeyValuePair(key, value);

      if (!this.data[index]) {
        this.data[index] = newPair
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }

      this.count++;
    }
  }

};

// const ht = new HashTable(5)

// ht.insertNoCollisions(1, 2)
// ht.insertNoCollisions(1, 2)
// ht.insertNoCollisions(1, 2)
// ht.insertNoCollisions(1, 2)

module.exports = HashTable;
