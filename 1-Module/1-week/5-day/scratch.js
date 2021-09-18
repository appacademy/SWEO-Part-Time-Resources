// Function Declaration Syntax

// function printer (str) {
//   console.log(str);
// }

// Function Declaration Syntax

// let printer = function (str) {
//   console.log(str);
// }

// printer('hello');

// mutable
// Array and Objects

// let arr = [1, 2, 3];
// arr[1] = 6;
// console.log(arr);

// // immutable
// // Strings, nums, bools, NaN, null

// let str = 'hello';
// str[1] = 'a';
// console.log(str);

// Array.push()

// let arr = [3, 2, 1];
// console.log(arr);
// let newLen = arr.push(0);
// console.log(newLen);
// console.log(arr);

// Array.pop()
// let arr = [3, 2, "hello"];
// let removed = arr.pop();
// console.log(removed);
// console.log(arr);

// Array.unshift()
// let arr = [3, 2, 1];
// console.log(arr);
// let newLen = arr.unshift(0);
// console.log(newLen);
// console.log(arr);

// Array.shift()
// let arr = [3, 2, "hello"];
// let removed = arr.shift();
// console.log(removed);
// console.log(arr);

// Nested Loops

// make a for loop that goes from 0 - 5
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
//   for (let j = 2; j <= 7; j++) {
//     console.log("     ",j);
//   }
// }

// Write a function that intakes a 2D and sums up ALL of the numbers in ALL of arrays

// [ [1,2,3], [4], [5, 6] ]

/* 
Plan
define a function called sum that intakes a 2d array
define a variable to hold the sum
Iterate over the OUTER array
  define a variable to hold the SUBARRAY
  Iterate over the SUBARRAY
    define a variable to hold the number 
    add that number to the sum
return sum
*/
// let sum = function(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let subArr = arr[i];
//     for(let j = 0; j < subArr.length; j++) {
//       let num = subArr[j];
//       res += num;
//     }
//   }
//   return res;
// }

// console.log(sum([[1,2,3], [4], [5, 6]]))

// Write a function that intakes an array and a target sum and returns true if any two numbers
// equal the targetsum 2sum

/*
[1,2,3], 4 => true;
[2,6,7], 9 => true;
[1,2,3], 22 => false;


            i
            j            	          
[1    2     3]
*/

/* 
define a function pairSum(arr, target)
Iterate over the array
  define a variable to hold the FIRST
  Iterate over the array
    define a variable to hold the SECOND number
    see if the firstNum + secondNum == target
       return true
return false
*/
// let pairSum = function (arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     let num1 = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       let num2 = arr[j];
//       if (num1 + num2 === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(pairSum([1, 2, 3], 2))
// console.log(pairSum([1, 2, 3], 4))
// console.log(pairSum([1, 2, 3], 22))

// Write a function that intakes an array and a target sum and returns a 2d
// array containing ALL instances where two unique numbers equal the target sum

/*
[1,2,3], 4 => [[1, 3]]
[2, 3, 6,7], 9 => [[2, 7], [3, 6]]
[1,2,3], 22 => [];


 	i           
    	j		                    	          
[2	3	6	7]
*/

/* 
Plan
Define a function called arrSums that intakes a 2d Arr and a target sum
define a res to store all of my pairs that equal the target
Iterate over the array
  define a variable to hold num1
  Iterate over the array starting at i + 1
  	define a var to hold the num2
  	if num1 + num2 is the target
      push [num1, num2]
return res
/* 

*/
// let arrSums = function (arr, target) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let num1 = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       let num2 = arr[j];
//       if (num1 + num2 === target) {
//         res.push([num1, num2]);
//       }
//     }
//   }
//   return res;
// };

// console.log(arrSums([2, 3, 6, 7], 9));
// console.log(arrSums([1, 2, 3], 4));

// takes in a word - a string!
// takes in an operation - also a string!
// only have to do real work for "capitalize" "uppercase" "double" "reverse"
// anything not in those words, return the original word unchanged

// check what operation we're being asked to perform
// based on the operation we're given, we need to
// "capitalize" - first letter of the string
// word[0].toUpperCase() - store this and combine it with the rest of the word
// to make a new word that fits our conditions - slice the rest of the word?
// "uppercase" - word.toUpperCase() ? does not mutate the word, but returns new string, "FOO"
// "double" - repeating each character of the string after the end of the original string
// iterate through string? for each letter, add onto original string, return
// word.repeat()
// "reverse" - iterate through the string - backwards? - concatenate final output string together
// what if stringChanger("foo", "banana") - return word? don't do anything else

function stringChanger (word, operation) {
  if (operation === "capitalize") {
    word[0]
    let letter = word[0];
    let slicedWord = word.slice(1);
    return letter.toUpperCase() + slicedWord;
  } else if (operation === "uppercase") {
    return word.toUpperCase();
  } else if (operation === "double") {
    return word.repeat(2);
  } else if (operation === "reverse") {
    let reversedString = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedString += word[i];
    }
    return reversedString;
  } else {
    return word;
  }
}

console.log(stringChanger("foo", "capitalize")); // Foo
console.log(stringChanger("foo", "uppercase")); // FOO
console.log(stringChanger("foo", "double")); // foofoo
console.log(stringChanger("foo", "reverse")); // oof
console.log(stringChanger("foo", "unknown")); // foo

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");