// Hash Functions
// Hash is to take in an input, scramble it, and return 'hashed' output

// given the same input it will always return the same output, this is
// because the scrambling process isn't random

// unlike encryption, hashing only works one way. there is no way to decrypt it

// these reasons are why hashes are so important for cyber security

// function simpleHash(str){
// 	let hashValue = 0;
// 	for(let i = 0; i < str.length; i++){
// 		hashValue += str.charCodeAt(i)
// 	}
// 	return hashValue
// }
// console.log(simpleHash('Password'))
// console.log(simpleHash('Password'))

// SHA Algorithm
// Secure Hashing Algorithm

// commonly used, because its fast, and its secure
// SHA-256
// given any number of bits its always going to return
// 256 bits of data

// there are different versions of SHA
// you can't brute force a SHA 256 decryption,
// because there are so many different possible outcomes
// 2^256 possible outcomes
// The term brute force means every single possiblity

// the SHA is open source, its available in every programming language

// Hash Table
// insanely useful data structure
// set()
// Used to implement everything from JS objects, sets, and caching/memoization, etc..

// Hash Tables use key/value pairs
// Hash Tables time complexity is o(1), for insertion, deletion, access and search

// Under the hood Hash Tables are arrays and with elements
// indexed by hash keys

// array = ['hello']
// array[0]

// hashTable = ['world']
// hashTable['abz&211lks'] -> 'world'

// theres always a fixed size for a hash table

// unlike array elements
// for hashTables the elements are referred to as buckets
// since we use arrays to implement hash tables, and they have to be fixed
// in size
// all of the buckets start out as null

const data = [null,null,null,null,null,null]

// data = [null,null,null,'Javascript',null,null]
// hashKey is 1047 --> index of 3

function simpleHash(str){
	let hashValue = 0;
	for(let i = 0; i < str.length; i++){
		hashValue += str.charCodeAt(i)
	}
	return hashValue
}

function hashMod(key){
	return simpleHash(key) % data.length
}

console.log(hashMod('Javascript'))

// is that hashMod is going to return a valid index for the data array
// as long as the key is a valid string, hashMod will always return a valid
// index
// Once we have that index, we can store, read, and delete key/value pairs

// Hash Collisions
// Inputs that output the same index
// Hash tables only work smoothly if every key gets a unique index,
// however there is a possiblity that at one point we can have the same
// key

// Arrays can only hold one value per index, inserting a new element
// will overwrite the previous element
// one way to lessen is to resize the array

// you can never completely avoid a hash collision

// there is no elegant solution
// we can use a linked list
// allows us to chain multiple key/value pairs inside a bucket

/*
Bucket 0 = <"Key1", "profile_name"> -> null
Bucket 1 = <"Key2", "Value"> -> <"Key3", "Password"> -> null
Bucket 2 = null
*/

// 'password'
