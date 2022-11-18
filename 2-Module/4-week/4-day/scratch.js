// let arr = []
// let arr2 = []
// function simpleHash(str) {
//   let hashValue = 0;

//   for (let i = 0 ; i < str.length ; i++) {
//     hashValue += str.charCodeAt(i);
//   }

//   return hashValue;
// }
// console.log(simpleHash('listen'));
// console.log(simpleHash('hello'));
// console.log(simpleHash('whattttt'))
// console.log(simpleHash('whattttt'));
// console.log(simpleHash('whattttt'));



// const isUnique = (arr) => {
// let set = new Set(arr);
// return set.size === arr.length;
// };

// // console.log(isUnique([1, 2, 3])); // t or f
// // console.log(isUnique([1, 2, 3, 1])); ///t or f

const mySet = new Set()
let thing = {name: 'Will'}


mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(1)
mySet.add(thing)
console.log(mySet.has(username))
// mySet.add(thing)
// mySet.add([1,2,3,4,5])
// mySet.add([1,2,3,4,5])

// console.log(mySet, 'before deletion')

// mySet.delete(thing)
// console.log(thing, 'line 40')
// console.log(mySet, 'afeter deletion')
// for(let apple of mySet){
// console.log("Iteration", apple)
// }

//PRACTICE SOLUTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
    //!!START
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    //!!END
  }

  hash(key) {
    //!!START
    // First 8 characters of sha256 hash
    const hashHexString = sha256(key).slice(0,8);

    // Convert to int
    return parseInt(`0x${hashHexString}`);
    //!!END
  }

  hashMod(key) {
    //!!START
    // Get index after hashing
    return this.hash(key) % this.capacity;
    //!!END
  }

  insertNoCollisions(key, value) {
    //!!START
    // Find the bucket index
    const index = this.hashMod(key);

    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error('hash collision or same key/value pair already exists!');
    }
    //!!END
  }

  insertWithHashCollisions(key, value) {
    //!!START
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    // equivalent to add to head for a linked list
    if (!this.data[index]) {
      this.data[index] = newPair
    } else {
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }

    this.count++;
    //!!END
  }

  insert(key, value) {
    //!!START
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
    //!!END
  }

}


module.exports = HashTable;
