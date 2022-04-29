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
    // let numbers = `0x${sha256(key).substr(0, 8)}`;
    // return parseInt(numbers, 16);
	let str = sha256(key);

	// console.log(str)
    let count = 0;
    let hash = ``;
    for (let i = 0; i < str.length; i++) {
      hash += str[i];
      count++;
      if (count % 8 === 0) {
        if (!str[i + 1]) break;
        hash += ",";
      }
    }
    let hashArr = hash.split(",");
    return parseInt("0x" + hashArr[0]);
  }

  hashMod(key) {
    // fill this in
	return this.hash(key) % this.data.length;

  }

  insert(key, value) {
	const hashMod = this.hashMod(key)
    const hash = new KeyValuePair(key, value);
    if (this.data[hashMod]) {
      hash.next = this.data[hashMod]
      this.count++
      this.data[hashMod] = hash;
    } else {
		this.count++
		this.data[hashMod] = hash;
		}
	}
}


const newHT = new HashTable()

console.log(newHT.data)
newHT.data[0] = 1
newHT.data[1] = 2
newHT.data[2] = 3
newHT.data[3] = 4

newHT.data[4] = 5
newHT.data[5] = 6

newHT.data[100] = 11
console.log(newHT.data)

module.exports = HashTable;
