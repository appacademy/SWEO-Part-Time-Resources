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
    this.data = new Array(numBuckets).fill(null)
    this.count = 0
    this.capacity = numBuckets
  } 
  // brute force
  // buildBuckets(num){
  //   let arr = []
  //   for(let i = 0 ; i < num; i++){
  //     arr.push(null)
  //   }
  //   return arr
  // }

  hash(key) {
    // return 637812323123123
    let hash = sha256(key).slice(0, 8)
    // Hash example
    // // let hash = 0
    // // for(let i = 0; i < key.length; i++){
    // //   // console.log(key.charCodeAt(i))
    // //   // console.log()
    // //   hash+=key.charCodeAt(i)
    // // }
    return parseInt(hash, 16)
  }

  hashMod(key) {
    return this.hash(key) % this.data.length
  }

  insert(key, value) {
    // I need to create a new Key value instance
    let newKeyVal = new KeyValuePair(key, value)
    // get the target index fro the hashMod method
    let index = this.hashMod(newKeyVal.key)
    //create a variable that is equal to what lives at the current index
    let targetBucket = this.data[index]
    // i need to check if something exists at that index already
    newKeyVal.next = targetBucket
    // if(targetBucket !== null){
    //   // if nothing is there I am going to do a normal index assignment
    //   // else I am going to do an add to head operation 
    //   // make the .next property of my new KeyVal pair the target bucket
    //   // then I need to reassign the hashmap it the target index to the new key val
    // }
    this.data[index] = newKeyVal
    this.count++
  }

}


let hashTable = new HashTable(10)
console.log(hashTable.hashMod('hey'))
console.log(hashTable.hashMod('hey'))
console.log(hashTable.data)

module.exports = HashTable;