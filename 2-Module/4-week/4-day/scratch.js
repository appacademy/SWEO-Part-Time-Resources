// TLDR on hashtable
// an array of key/value pair where the key hashed and modded return the index at which it is stored
// every key value pair has a next pointer in the case of the hash/mod returning the same index
// if collision occurs do an add to head style insert


// What is a Set, a collection type that only allows unique values

let mySet = new Set()
let array = [1,2,3,4]

mySet.add('Some value')
mySet.add(array)
mySet.add(5)
mySet.add({'hey': 'James'})
mySet.add(new Set())

mySet.delete('Some value')

console.log(mySet.has(array))

console.log(mySet)
