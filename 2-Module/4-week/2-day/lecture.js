// Hashing
// Hash Functions
// is to take in an input and scramble it, then return a 'Hashed' output


// encryption when given an input we get a an encrypted value but
// the same input would yield a different output

// but hashing the same input would yield the same output
// because the scrambling process isn't random

// unlike encryption
// hashing only works one way. There is no way to decrypt a hashed value

// these are the reasons why hashing is so important for cyber security

// function simpleHash(str){
// 	let hashedValue = 0;
// 	for(let i = 0; i < str.length; i++){
// 		hashedValue += str.charCodeAt(i)
// 	}

// 	return hashedValue
// }

// console.log(simpleHash('Javascript'))
// console.log(simpleHash('Javascript'))

// SHA
// Secure Hashing Algorithm - Most common hashing algorithm
// commonly used, because its super fast and super secure

// SHA-16
// SHA-32
// SHA-64
// SHA-128

// SHA-256
// will always return 256 bits of data
// regardless of the input size

// you can't brute force a SHA-256 hash value, 2^256 possible outcomes

// its an open source algorithm, and its available in almost every popular programming language

// Hash Tables
// very useful data structure
// used to implement everything from JS objects, sets, caching/memoization and etc..

// Hash tables are Key/Value pairs - with a hashed key
// Hash tables have a very efficient time complexity
// insertion o(1), deletion o(1), search o(1), access is o(1) -> o(1)

// under the hood, a hash table is simply an array with elements indexed by a hashed key

// to create key/value pairs, we hash the key, put the key into a modulo function,
// and then we get an array index

// We always want to have a fixed size for a hash table

// Compared to array elements, in a hash table they are called 'buckets'
// since we use arrays to implement hash tables, and they have to be fixed of size
// all of the buckets start out as null

// array = [1,2,3,4]
// array[0] -> 1

// hashTable = [1,2,3,4]
// hashTable['yahs7@8k1!'] -> 1

// const data = [null, null, null, null, null, null, null, null]

// function simpleHash(str){
// 	let hashedValue = 0;
// 	for(let i = 0; i < str.length; i++){
// 		hashedValue += str.charCodeAt(i)
// 	}

// 	return hashedValue
// }

// function hashMod(str){
// 	const index = simpleHash(str) % data.length;
// 	data[index] = str
// 	return index
// }

// hashMod('javascript')
// console.log(data)
// // 1079
// function getData(hashedKey){
// 	const value = data[hashedKey % data.length]
// 	if(!value){
// 		return 'invalid hashedKey'
// 	} else return value
// }

// console.log(getData(1111))

// Once we have that index, we can store/read/get/delete from that index

// Hash Collision
// Two seperate inputs returned the same index
// Hash tables only work smoothly if every key gets a unique index, however this
// is ALWAYS a possibility

// YOU CAN NEVER COMPLETELY AVOID HASH COLLISIONS
// Resolving hash collisions

// Unfortunately there is no elegant way to solve hash collisions

// Resizing the array -> can potentially waste unneseccary space
// if we dont resize the array we lose that data in the same index

// We can use link list to allow multiple key/value pairs in a bucket

// All we need to do is put linked list inside a bucket

/*

Bucket 0 -> null
Bucket 1 -> <"key1", "1234Password">.next -> <"key4", "password1234">.next -> null
Bucket 2 -> <"key2", "firstNameLastName">.next -> null
Bucket 3 -> <"key3", "contactInfo">.next -> null

*/
