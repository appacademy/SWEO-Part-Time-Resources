function simpleHash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}

// console.log('yep'.charCodeAt(0))
// console.log('yep'.charCodeAt(1))
// console.log('yep'.charCodeAt(2))
const hash1 = simpleHash("yep");
const hash2 = simpleHash("yep");
const hash3 = simpleHash("nope");
const hash4 = simpleHash("hello world");
const hash5 = simpleHash("odd");

// console.log(hash1)
// console.log(hash2)
// console.log(hash3)
// console.log(hash4)
// console.log(hash5)

class HashMap {
  constructor(numBuckets) {
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
  }

  simpleHash(str) {
    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
      hashValue += str.charCodeAt(i);
    }

    return hashValue;
  }

  getHashIndex(hash) {
    return hash % this.capacity;
  }
}

class KeyValuePairNode {
    constructor(key, value){
        this.key = key
        this.value = value
        this.next = null
    }
}

// hashmap array example
// [1, null, null, null, null]

const hashMap = new HashMap(4);
console.log(hashMap.data);
hashMap.data[hashMap.getHashIndex(hashMap.simpleHash('yep'))] = new KeyValuePairNode('yep', 5)
hashMap.data[hashMap.getHashIndex(hashMap.simpleHash('hello world'))] = new KeyValuePairNode('hello world', 10)
console.log(hashMap.data);

let newPair = new KeyValuePairNode('nope', 15)
newPair.next = hashMap.data[2] // this is the index that is generated from using the key of nope/yep
hashMap.data[hashMap.getHashIndex(hashMap.simpleHash('nope'))] = newPair
console.log(hashMap.data);
