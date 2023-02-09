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
    // Your code here
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    // Your code here
    const hashed = sha256(key).slice(0,8)
    return parseInt(`0x${hashed}`)
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key)
    const newPair = new KeyValuePair(key, value)

    if(!this.data[index]){
      this.data[index] = newPair
      this.count++
    } else{
      throw new Error('hash collision or same key/value pair already exists!')
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key)
    const newPair = new KeyValuePair(key, value)

    if(!this.data[index]){
      this.data[index] = newPair
    } else{
      newPair.next = this.data[index]
      this.data[index] = newPair
    }
    this.count++
  }

  insert(key, value) {
    // Your code here
    const index = this.hashMod(key)
    const newPair = new KeyValuePair(key, value)
    let curr = this.data[index]

    while(curr && curr.key !== key){
      curr = curr.next
    }

    if(curr){
      curr.value = value
    } else{
      if(!this.data[index]){
        this.data[index] = newPair
      } else{
        newPair.next = this.data[index]
        this.data[index] = newPair
      }
      this.count++
    }

  }

}


module.exports = HashTable;