/*

Write a function called countVowels that counts the vowels contained in an input string. Store the count of each vowel individually in an object. The key should be the vowels with the count being the value contained at the key.

I: "hello world"
O: {
      e: 1,
      o: 2
   }

I: "apple"
O: {
      a: 1,
      e: 1
   }

I: "coding is as much an art as a science"
O: {
      o: 1,
      i: 3,
      a: 5,
      u: 1,
      e: 2
   }


--Plan

define function with the name countVowels
1 param -> str and it'll be a string

var for holding the results -> {}
var to define a list of vowels

for loop
  var for current letter -> char
  condition that checks if char is a vowel
  if it is a vowel
   //do some stuff
  if not
   //skip to the next iteration

return the results object
*/

// function countVowels(str){
//   let vowelCountObj = {};
//   let vowels = 'aeiouAEIOU';

//   for(let i = 0; i < str.length; i++){
//     let char = str[i];

//     if(vowels.includes(char)){
//       if(vowelCountObj[char] !== undefined){
//         vowelCountObj[char] += 1;
//       } else {
//         vowelCountObj[char] = 1;
//       }
//     }
//     console.log({vowelCountObj, char});
//   }

//   return vowelCountObj;
// }

// console.log(countVowels('apple orange'));


//Destructuring

// let person = {
//   firstName: "William",
//   lastName: "Vincent",
//   parent: {
//     firstName: "Jeff",
//     lastName: "Vincent",
//   }
// }

// let {parent} = person;

// console.log(parent);

// let {firstName} = person;

// console.log(firstName);

// let myArray = ['cat', 'dog', 'hamster']


// let [arg1, arg2, arg3, arg4, arg5] = myArray;



// console.log(arg1, arg2, arg3, arg4);



//Rest and Spread

// Rest Parameter -- Only used as a parameter to a function

// function addAllNums(...nums){
//   console.log(nums);
//   let sum = 0;
//   for(let i = 0; i < nums.length; i++){
//     sum += nums[i];
//   }
//   return sum;
// }

// console.log(addAllNums("h", "e", "l", "l", "o"));
// console.log(addAllNums(1,2,3));
// console.log(addAllNums(1,2,3,4));


// Spread Operator -- basically used anywhere

// let arr1 = [1,2,3]
// let arr2 = [4,5,6];

// let arr3 = [...arr1, ...arr2];
// console.log({arr1, arr2, arr3});


// let arr = [[1,2,3], [4,5,6]];
// let newArr = [];

// for(let i = 0; i < arr.length; i++){
//   let el = arr[i];
//   newArr.push(...el);
//   console.log(newArr);
// }
