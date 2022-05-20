//! Binary Practice
//------------------------------------------------//
// //Binary to base 10
// let b10 = parseInt('1010', 2);      // 10
// console.log(b10)

//------------------------------------------------//
//Binary to hexadecimal
// // binary to base 10
// let b10 = parseInt('1010', 2);      // 10

// // // // // // //base10 to hex
// let hex = Number(b10).toString(16);  // 'a'
// console.log(hex)  //0x0a

//------------------------------------------------//
//Hexadecimal to base 10//
//hex to base 10
// let b10 = parseInt('0xa1', 16);      // 161
// console.log(b10)

//------------------------------------------------//
//Hexadecimal to binary
// let str = 0xff

// function hexaToBin(str) {
//     str = str.substring(2)
//     console.log('step 1', str)
//     let num = parseInt(str, 16)
//     console.log('step 2', num)
//     return '0b' + num.toString(2)

// }

// console.log(hexaToBin('0xff'))

//hex to base10
// let b10 = parseInt('0xff', 16);      // 255
// // //b10 to binary
// let binary = Number(b10).toString(2);  // '11111111'

// console.log(binary)  //0b11111111

//------------------------------------------------//
//Base 10 to binary
// b10 = 8
// let binary = Number(b10).toString(2);  // 1000
// console.log(binary) //0b1000

//------------------------------------------------//
//Base 10 to hexadecimal
// let b10 = 1000
// let hex = Number(b10).toString(16);  // 8
// console.log(hex) // 0x08

///

//------------------------------------------------//
//Base 10 to ASCII
// console.log(String.fromCharCode(65)); //A
// console.log(String.fromCharCode(97)); //a

//------------------------------------------------//
//Hexadecimal to ASCII
// let b10 = parseInt('0x41', 16);      // 65

// console.log(String.fromCharCode(b10)); //A

//! Array practice
// Identify the time complexity of each of these functions with a 1 sentence justification for your answer. Assume arr is an array of length n.

arr.push();
// time O1
// space O1

// Time complexity: O(1)
// Space complexity: O(1)
// Justification: Adding to the end of an array requires no shifting and happens in place.

arr.pop();
//time O1
//space O1

// Time complexity: O(1)
// Space complexity: O(1)
// Justification: Removing from the end of an array requires no shifting and happens in place.

arr.shift();
// time On
// space O1

// Time complexity: O(n)
// Space complexity: O(1)
// Justification: Removing from the front of the array requires all other values to shift to the left by 1. This happens in place.

arr.unshift();

//time On
//space O1

// Time complexity: O(n)
// Space complexity: O(1)
// Justification: Adding to the front of the array requires all other values to shift to the right by 1 to make space for the first value. This happens in place.

arr.splice();
//time On
//space O1

// Time complexity: O(n)
// Space complexity: O(1)
// Justification: Splice will add or remove elements to the middle of the array in-place. This requires shifting all elements to the right of the new location.

arr.slice();
//time On
//space On

// Time complexity: O(n)
// Space complexity: O(n)
// Justification: This will create a new copy of the array with some elements sliced out. The remaining n values will need to be copied to the new location.

arr.indexOf();
//time On
//space O1

// Time complexity: O(n)
// Space complexity: O(1)
// Justification: This will search visit each item in the array until it finds the value. No extra space is needed.

arr.map();
// time On
// space On

// Time complexity: O(n)
// Space complexity: O(n)
// Justification: Map creates a new array (O(n) space) with some function mapped to each element. This is assuming the time complexity of the map callback has a time complexity of O(1).

arr.filter();
// time On
// space On

// Time complexity: O(n)
// Space complexity: O(n)
// Justification: Filter creates a new array (O(n) space) with a filter applied to each element. This is assuming the time complexity of the filter callback has a time complexity of O(1).

arr.reduce();
//Time On
//Space O1

// Time complexity: O(n)
// Space complexity: O(1)
// Justification: Reduce applies a reducer function to each element in the array. This is assuming the time complexity of the accumulator has a time complexity of O(1).

arr.reverse();
// time On
// space O1

// Time complexity: O(n)
// Space complexity: O(1)
// Justification: Reverse will move all n elements in-place.

[...arr];
//Time On
//Space On

// Time complexity: O(n)
// Space complexity: O(n)
// Justification: The spread operator will copy all n elements in the original array to a new array of length n.

//! Dynamic Arrays Practice
class DynamicArray {

  constructor(defaultSize=4) {

    // Fill this out
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize)

  }

  read(index) {

    // Fill this out
    // You may not use any built-in JS array functions
    if (index >= this.length) return undefined
    return this.data[index]

  }

  unshift(val) {

    // Fill this out
    // You may not use any built-in JS array functions
    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i-1]
    }

    this.data[0] = val;
    this.length++

  }

}


module.exports = DynamicArray;