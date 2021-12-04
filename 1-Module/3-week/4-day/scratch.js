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

define our function
   var for holding results -> {}
   var to define what is a vowel "aeiouAEIOU"

   for loop through the input string
       var holding the current char -> str[i]

       if that checks if the char is a vowel
          //do stuff

   return result obj
*/


// function countVowels(str){
//   let vowelCountObj = {};
//   let vowels = "aeiouAEIOU";

//   for(let i = 0; i < str.length; i++){
//     let char = str[i];

//     if(vowels.includes(char)){
//       if(vowelCountObj[char] === undefined){
//         vowelCountObj[char] = 1;
//       } else {
//         vowelCountObj[char]++;
//       }
//     }
//   }
//   return vowelCountObj;
// }

// console.log(countVowels("coding is as much an art as a science"));


// Destructuring
// It is never strictly necessary.

// let person = {
//   firstName: "William",
//   lastname: "Vincent",
//   parent: {
//     firstName: "Jeff",
//     lastName: "Vincent"
//   }
// }

// let { parent: parent1 } = person;

// console.log(parent1);


// let myArr = ['a','b'];

// let [arg1, arg2] = myArr;

// myArr = [arg2, arg1];

// console.log(myArr);


//Rest Param -- only when defining functions


// function addAllNums(...nums){
//   let sum = 0;

//   console.log(nums);
//   for(let i = 0; i < nums.length; i++){
//     sum += nums[i];
//   }

//   return sum;
// }

// console.log(addAllNums(1));
// console.log(addAllNums(1,2));
// console.log(addAllNums(1,2,3));
// console.log(addAllNums(1,2,3,4));
// console.log(addAllNums(1,2,3,4,5));


//Spread Operator

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1, ...arr2];
// console.log({arr1, arr2, arr3});


let myObj = {
  key1: 1,
  key2: 2,
  key3: 3
}
let myObj2 = {
  key4: 4,
  key5: 5,
  key6: 6
}


let myObj3 = {...myObj, ...myObj2}
console.log(myObj3);
