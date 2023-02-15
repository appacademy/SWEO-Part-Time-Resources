//HASH FUNCTIONS
//Takes in an input, scrambles it, and returns the output

//If you pass in the SAME INPUT, you will always receive the same OUTPUT
//Because the scrambling process isn't random

//Unlike encryption, hashing only works in one direction (which makes it really secure)
//Critical as to why hashing is so important in cyber security

// function simpleHash(str) {
//     let hashValue = 0;
//     for (let i = 0; i < str.length; i++) {
//         hashValue += str.charCodeAt(i);
//     }
//     return hashValue
// }

// console.log(simpleHash("King"));
// console.log(simpleHash("King1"));

//SHA Algorithm
//Secure Hashing Algorithm
//Most common hashing algo
//SUPER FAST
//SUPER SECURE

//Given any number of bits as an input, SHA will always return 256 bits
//SHA256 - (other version return different sized outputs)

//You CANNOT brute force an SHA256 hash, as there are 2^256 of possible outcomes

//The SHA algorithm is open source (which means anyone can use it)
//Has versions for every popular programming language


//HASH TABLES
//Insanely useful data structure

//Hash tables provide KEY/VALUE pairs
//It has a constant O(1) time complexity for insertion, deletion, access, and SEARCH

//Under the hood it's almost always an array where the elements are indexed by a hashed key

//Hash table data storage

//Steps to creating a hash table
//Step 1: Create an array of fixed size
//Step 2: Write a hash function that turns keys into integers
//Step 3: We need a function to convert those integers into valid array indices
//Once we have done all that, we can store our values in those indices

data = [null, null, null, null, null, null, null, null]

function simpleHash(str) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i);
    }
    console.log(hashValue);
    return hashValue;
}

function hashMod(key) {
    return simpleHash(key) % data.length;
}

console.log(hashMod("King"))

//HASH COLLISIONS
//Hash tables are pretty fast, but only if we don't have hash collisions

//A hash collision is when two seperate hashed keys return the same index.
//Arrays can only store one value per index

//So when we try to insert another value into the same index, we overwrite the original value

//Normally you can make the probability less by resizing the array
//HOWEVER it is still a possibility

//Another fi for hash collisions

//Linked list chaining
//Make each bucket a linked list

/*

Bucket 0 = <"AppleKey", "apple"> -> null

Bucket 1 = <"PearKey", "pear"> -> <"OrangeKey", "orange"> -> null

Bucket 2 =


*/

