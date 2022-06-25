class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
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


  read(key) {
    // Find the bucket index
    const index = this.hashMod(key);

    let currentPair = this.data[index];

    while (currentPair) {
      //traverse link list nodes until a key match is found.
      if (currentPair.key == key) {
        return currentPair.value;
      }
      currentPair = currentPair.next;
    }

    // Otherwise, no key match found, return undefined
    return undefined;
  }


  resize() {
    // Resize bucket (occurs when load factor > 0.7)
    const oldData = this.data;

    this.capacity = 2 * this.capacity;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;

    let currentPair = null;

    for (let i = 0; i < oldData.length; i++) {
      currentPair = oldData[i];

      while (currentPair) {
        //while there is a node, traverse each node and re-insert each key/value pair.
        this.insert(currentPair.key, currentPair.value);

        currentPair = currentPair.next;
      }
    }
  }


  delete(key) {
    const index = this.hashMod(key);

    let currentPair = this.data[index];
    let lastPair = null;

    //traverse until matching key is found or null is hit.
    while (currentPair !== null && currentPair.key !== key) {
      lastPair = currentPair;
      currentPair = lastPair.next;
    }

    if (currentPair === null) {
      //currentPair pointer hit null, meaning that no match was found.
      return "Key not found"
    } else {
      //key match found

      if (lastPair === null) {
        //only one node in the link list, first element is the one we want to remove.
        this.data[index] = currentPair.next;
      } else {
        lastPair.next = currentPair.next;
      }
      this.count--;
    }
  }
}


module.exports = HashTable;
