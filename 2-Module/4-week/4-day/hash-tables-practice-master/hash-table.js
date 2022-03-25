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
    this.capacity = numBuckets
    this.data = this.fillBuckets(numBuckets)
  }

  fillBuckets(num){
    let arr = []
    for(let i = 0 ; i < num; i++){
      arr.push(null)
    }
    return arr
  }

  hash(key) {
    let myKey = sha256(key).slice(0, 8)
    let num = parseInt(myKey, 16)
    return num
  }

  hashMod(key) {
    return this.hash(key) % this.data.length
  }

  insert(key, value) {
    // going to create a new key val pair instance 
    let newKeyVal = new KeyValuePair(key, value)
    //get the target index
    let index = this.hashMod(newKeyVal.key)
    // check to see if something exists at the index
    // console.log(this.data, index)
    if(this.data[index] === null){
      // if not, assign that index, 
      this.data[index] = newKeyVal
      this.count++
    }
    // if so do an add to head type operation
    else{
      // creating a var that is equal to what lives at the target index
      let currentBucket = this.data[index]
      // i am saying that current bucket is the .next of my new key val
      newKeyVal.next = currentBucket
      // reassigning the index to my new KeyVal
      this.data[index] = newKeyVal
      this.count++
    }
  }

}


module.exports = HashTable;