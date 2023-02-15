//HASH FUNCTIONS
//Hash functions take in an input, scramble it, return the "hashed" output

//Given the SAME INPUT it will always return the SAME OUTPUT, this is because the scrambling
//process isnt random

//Unlike encryption, hashing only works one way. There is no way to decrypt it

//These reasons are why hashes are so important for cyber security

// function simpleHash(str) {
//     let hashValue = 0;
//     for (let i = 0; i < str.length; i++) {
//         hashValue += str.charCodeAt(i);
//     }
//     return hashValue;
// }

// console.log(simpleHash("Hello World!"))
// console.log(simpleHash("Hello World!"))

//SHA Algorithm

//Secure Hashing Algorithm - Most commonly used hashing algo

//Commonly used, super fast, super secure

//SHA-256 Given any number of bits, the SHA will always return 256 bits
//Granted there are versions of it that return different sized outputs

//You can't brute force an SHA-256 decryption, as there are 2^256 possible outcomes - 1.1579209e+77
//Again, brute forcing means to try every single possibility

//The SHA algorithm is open source, and it's available in almost every popular programming language

//HASH TABLES
//Insanely useful data structure
//Used to implenent everything from JS objects, sets, caches, etc.

//Hash tables store KEY/VALUE pairs - (With a hashed key)

//Hash tables have a time complexity of O(1) - Constant - for insertion, deletion, access AND SEARCH

//Under the hood, a hash table is simply an array with elements indexed by a hashed key

//To create key/value pairs, we hash the key, put the key into a modulo function, and then we get an array index

//We always want to have a fixed size for a hash table

//Compared to array elements, in a hash table they are called "buckets"
//Since we use arrays to implement hash tables, and they have to be of fixed size
//All of the buckets start out as null


//Step one: Initialize an array of fixed size
//Step two: Write a hash function that converts keys into integers
//Step three: Write a function the hased key (integer) into a valid array index

data = [null, null, null, null, null, null, null, null]

function simpleHash(str) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i);
    }
    return hashValue;
}

function hashMod(key) {
    return simpleHash(key) % data.length;
}

console.log(hashMod("King"))