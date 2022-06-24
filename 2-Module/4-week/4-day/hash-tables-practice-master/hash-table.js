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

  constructor(numBuckets = 4) { //numBuckets =  4; the 4 reprsents default if nothing is passed to numBuckets
    this.capacity = numBuckets;
    this.count = 0; //represents how many pairs are in our array currently
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    //take the key and hash it using sha
    const hexHash = sha256(key); //7deb95144cc ...
    //take the first 8 digits or string
    const firstEight = hexHash.slice(0,8);
    //convert the first 8 string digits into a number (decimal)
    return parseInt(firstEight, 16);
    // return parseInt("0x" + firstEight); //works just like above
  }

  hashMod(key) {
    const index = this.hash(key) % this.capacity;
    return index;
  }

  insert(key, value) {
    //first create the key value pair node 
    const newKVNode = new KeyValuePair(key,value); //newKVNode is an INSTANCE (object)

    //determine which index does the node belong. (using the this.hashMod that we built and passing it the key)
    const index = this.hashMod(key);

    //add in the node to the array at that index. BUT FIRST we need to check if the array's index is available (nothing occupying it current)
    //if index is empty ...
    if(this.data[index] === null){ //if it's === null, means that the index is empty there.
      this.data[index] = newKVNode;
      this.count += 1;
    }
    //else means that we have a hash collision, so handle that later.
    else{
      //handle hash collision here
      //1) take the newKVNode next pointer and point it to the node that is occupying the index (newKVNode.next = this.data[index])
      const nodeAtIndex = this.data[index];
      newKVNode.next = nodeAtIndex;

      //2) reassign the current index and put the newKVNode there instead
      this.data[index] = newKVNode;
      this.count += 1;
    }

  }

}


module.exports = HashTable;