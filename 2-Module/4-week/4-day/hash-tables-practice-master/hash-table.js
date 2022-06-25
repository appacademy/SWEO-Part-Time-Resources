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
    //hash our key
    const hash = sha256(key); //cf19db795650f46ee702531aa68337005ad5a7b83283984842a18977f8434bce

    //take first 8 digits of the hexadecimal hash and convert it to decimal
    const firstEight = hash.slice(0,8) //cf19db79
    const decimal = parseInt(firstEight, 16); //3474578297
    // const decimal = Number("0x" + firstEight); //will also work.
    return decimal;
  }

  hashMod(key) {
    const index = this.hash(key) % this.capacity; //i.e. 3474578297 % 4 = 1 
    return index;
  }

  insert(key, value) {
    //create the new node (instance)
    const newKVNode = new KeyValuePair(key, value);

    //get the index: hashMod(key) in order to get the index
    const index = this.hashMod(key);

    //check if the index location is null (does not contain a node there already), 
    if(this.data[index] === null){
      // then add the new node in
      this.data[index] = newKVNode;
    }
    else{
      //there is a collision here, something already exists in this index. So we have to handle it later
      
      //take the newKVNode.next = this.data[index]
      newKVNode.next = this.data[index];
      //replace the old node in the bucket with newKVNode (this.data[index] = newKVNode)
      this.data[index] = newKVNode;
    }
    this.count += 1;
  }

}


module.exports = HashTable;