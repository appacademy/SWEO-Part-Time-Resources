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

//Again hashedMod is going to return a valid index for the "data" array

//As long as the key is a valid string, hashedMod will always return a valid index

//Once we have that index, we can store, read, and delete key/value pairs

//HASH COLLISIONS
//Two seperate return the same index
//Hash tables only work soothly if every key gets a unique index, however this is ALWAYS a possibilty

//Arrays can only hold one value per index, inserting the new pair will overwrite the previous key/value pair

//One way to lessen the possibility of a hash collisions is to resize the array, however, there will still
//always be a possibility of a hash collision

//YOU CAN NEVER COMPLETELY AVOID HASH COLLISIONS

//Resolving hash collisions

//Unfortunately there are no elegant solutions (resizing arrays wastes space)

//We can use linked list cahining to allow multiple key/value pairs within one bucket

//We literally just put linked lists inside of hash tables

/*

Bucket 0 =  <"Key1", "Value"> -> null

Bucket 1 = <"Key2", "King">  ->  <"Key3", "Apples">   -> null

Bucket 3 = <"K1", "value">

*/