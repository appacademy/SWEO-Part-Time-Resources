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
	this.data = []
	for(let i = 0; i < numBuckets; i++){
		this.data.push(null)
	}
	// this.data = new Array(this.capacity).fill(null)
	//
  }

  hash(key) {
    let hashKey = sha256(key)
	let slicedHash = hashKey.slice(0,8);
	return parseInt(slicedHash, 16)
  }

  hashMod(key) {
    return this.hash(key) % this.data.length
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);

	if(this.data[index] === null){
		this.data[index] = new KeyValuePair(key, value);
	} else {
		throw new Error('hash collision or same key/value pair already exists!')
	}
	this.count++
  } // time o(1), space o(1)

  insertWithHashCollisions(key, value) {
	const index = this.hashMod(key);

	if(this.data[index] === null){
		this.data[index] = new KeyValuePair(key, value);
	} else {
		const newPair = new KeyValuePair(key, value);
		newPair.next = this.data[index]
		this.data[index] = newPair
	}
	this.count++
  } // time o(1), space o(n)

  insert(key, value) {
	const index = this.hashMod(key);

	let newPair = this.data[index];

	while(newPair){
		if(newPair.key === key){
			newPair.value = value
			return
		}
		newPair = newPair.next
	}

	return this.insertWithHashCollisions(key, value) // 
  } // time o(n), space o(n)

}


module.exports = HashTable;
