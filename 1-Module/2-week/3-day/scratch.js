// 'hello world' -> 'world'
// 'everybody likes cake' -> ''
// 'william' -> 'william'

// let checkIfEWord = function(word){
//   let lower = word.toLowerCase();
//   return lower.includes('e');
// };

// let removeEWords = function(sentence){
//   let wordsArr = sentence.split(' ');
//   let res = [];

//   for(let i = 0; i < wordsArr.length; i++){
//     let word = wordsArr[i];
//     let isEWord = checkIfEWord(word);

//     if(!isEWord){
//       res.push(word);
//     };
//   };
//   return res.join(' ')
// };

// console.log(removeEWords('hello world'));


/*
--Understand
I: string -> 'Hello' || 'hEllO'
O: string -> 'HELLO ... hEllO ... hello'


--Plan
1. define the function

a) transform the word to uppercase
  1. define function
  2. take in word
  3. toUpperCase()
b) keep original
c) transform to lowercase
  define function
  take in word
  toLowerCase()

2. return format
  a) define new var
  b) concat three together
  c) return it
*/

// O: string -> 'HELLO ... hEllO ... hello'

//upper helper
// let upper = function(word){
//   return word.toUpperCase();
// };

// //lower helper
// function lower(word){
//   return word.toLowerCase();
// };

// function middle(word){
//   return word;
// }

// function compile(start, middle, end, seperator){
//   return start + " " + seperator + " " + middle + " " + seperator + " " + end;
// }

// let echo = function(word){
//   let wordUp = upper(word);
//   let wordDown = lower(word);
//   let inputWord = middle(word);
//   return compile(wordUp, inputWord, wordDown, '...')
// }

// console.log(echo('hElLo'));


/*
we can helper to check if a num is divisible by 5
divisible by 3
check that its not both.
*/

// let divBy5 = function(num){
//   return num % 5 === 0;
// };

// let divBy3 = function(num){
//   return num % 3 === 0;
// };

// let xor = function(a,b){
//   return (a || b) && !(a && b)
// };

// let fizzBuzz = function(num){
//   for(let i = 0; i < num; i++){
//     let a = divBy3(i)
//     let b = divBy5(i)
//     if(xor(a, b)){
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(20); // prints out:

// 3
// 5
// 6
// 9
// 10
// 12
// 18


// let initials = function(str){
//   let nameArr = str.split(' ');
//   let res = '';
//   for(let i = 0; i < nameArr.length; i++){
//     let name = nameArr[i];
//     res += name[0].toUpperCase();
//   }
//   return res;
// }

// console.log(initials('Mary La Grange')); // 'MLG'


// let twoSum = function(arr, target){
//   for(let i = 0; i < arr.length; i++){
//     let num1 = arr[i];

//     for(let j = i + 1; j< arr.length; j++){
//       let num2 = arr[j];
//       if(num1 + num2 === target){
//         return true;
//       };
//     }
//   }
//   return false;
// }


// console.log(twoSum([1, 7, 3, 0, 8], 5)); // true





// let popper = function(arr, num){
//   let res = [];
//   for(let i = 0; i < arr.length; i++){
//     //code to run
//     // console.log('I removed an item')
//     console.log('do for each')
//     //code to run
//   }
// }

// let arr1 = ['a', 'b', 'c', 'd', 'e'];

// console.log(popper(arr1, 2)); // [ 'e', 'd' ]

// console.log(arr1); // [ 'a', 'b', 'c' ]


/*
 prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!
*/


// function checkPrime(num){
//   for(let i = 2; i < num; i++){
//     if(num % i === 0){
//       return false;
//     }
//   }
//   return true;
// }


// let choosePrimes = function(arr){
//   let res = [];

//   for(let i = 0; i < arr.length; i++){
//     let num = arr[i];

//     if(checkPrime(num)){
//       res.push(num);
//     }
//   }
//   return res;
// }

// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]


// let twoDProd = function(arr){
//   let product = 1;

//   for(let i = 0; i < arr.length; i++){
//     let subArr = arr[i];

//     for(let j = 0; j < subArr.length; j++){
//       let num = subArr[j];
//       product *= num;
//     }
//   }

//   return product;
// }



// let arr1 = [
//   [6, 4],
//   [5],
//   [3, 1]
// ];
// console.log(twoDProd(arr1)); // 360


// let longestWord = function(sentence){
//   if(sentence === ''){
//     return null;
//   }

//   let length = 0;
//   let idx;
//   let wordsArr = sentence.split(' ')

//   for(let i = 0; i < wordsArr.length; i++){
//     let word = wordsArr[i];

//     if(word.length > length){
//       length = word.length;
//       idx = i;
//     }
//   }

//   return wordsArr[idx];
// }


// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // null
