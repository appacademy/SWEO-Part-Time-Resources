console.log("-----------------static vs dynamic arrays:-----------------");
/* The following are key things to note about static and dynamic arrays.

1) arrays (static) ==> traditional arrays and its fundamental qualities.
    1.1) fixed length when initialized (need to determine length ahead of time) and does not have automatic resizing (hence static)

    1.2) elements stored in a sequential or contiguous block of memory.
    1.3) can only hold like or SIMILAR DATATYPES


2) dynamic arrays ==> these arrays have a bit of modifications compared to the original implementation 
    2.1) dynamic in length and has automatic resizing (through making a new array and copying everyhting over + new stuff)
    2.2) slower append time since there's cases where resizing happens (taking each element and copying them to new array)
        - i.e. dynamic arrays .push methods worst case time complexity is O(n). but on average case it's O(1)

    2.3) elements stored in a sequential or contiguous block of memory.
    2.4) can only hold like or SIMILAR DATATYPES
        - Wait Wes... JS arrays hold different data! - Not quite. Remember they hold `pointers` which are addresses that point to the different data. `Pointers` have the SAME TYPE.
        //const array = [abx0129, abx0130, abx0131]
        //abx0129 --> "str"
        //abx0130 --> 30
        //abx0131 --> {obj-key-1: 1}

*/
console.log("-----------------Practice:-----------------");
//1) True||False: Arrays can store different data types 
    //answer: false

// const array = [1, 114, 255]
//3) Given the array above, in an 8-bit system, binary value or string of the given decimal value of 114? (convert this decimal to binary)

    // convert decimal 114 to binary 
    // 2^0 = 1   --> 0
    // 2^1 = 2   --> 1
    // 2^2 = 4   --> 0
    // 2^3 = 8   --> 0
    // 2^4 = 16  --> 1 (16 now fits into 18 --> 18 - 16 = leaving us with 2)
    // 2^5 = 32  --> 1 (32 now fits into 50 --> 50 -32 = 18)
    // 2^6 = 64  --> 1 (64 fits into 114 --> 114 -64 = 50)
    // 2^7 = 128 --> 0

        //answer: `0b01110010`


//4) True||False: An array is a sequence of elements of the same type stored in a contiguous block of memory.
    //answer: true

//5) const array = [1, 114, 255]
//- provided the same array and knowing that each number is taking 1 byte of memory (8-bits).
//- the first element (1) has a starting Address of 204 and is at the index of 0.
//- given the equation: `valueAddress = startAddress + (index * sizeOfDataInBytes)
//- what is the value Address of the last element `255` in that array (hint: what is 255's index)
    //ANSWER: 206. Access time of O(1) given the index
    // valueAddress = 204 + (2 * 1) 
    //we can derive the address location from just math if our array follow the standard conventions that an array should. (each element has the similar datatype as well as being continuous in memory)



console.log("---------------Static Array Complexity---------------")
// 	            Average Case	Worst Case
// space	    O(n)	        O(n)
// lookup	    O(1)    	    O(1)    
// append(push) O(1)    	    O(1)    
// insert	    O(n)    	    O(n)    
// delete	    O(n)    	    O(n)    

console.log("---------------Dynamic Array Complexity---------------")
// 	            Average Case	Worst Case
// space	    O(n)	        O(n)
// lookup	    O(1)    	    O(1)    
// append(push)	O(1)    	    O(n)    
// insert	    O(n)    	    O(n)    
// delete	    O(n)    	    O(n)    