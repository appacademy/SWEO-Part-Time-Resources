/*
Input: string, string with multiple words
Output: string, without the e words
*/


// let checkWord = function(word){
//   let lower = word.toLowerCase();
//   return lower.includes('e');
// }

// let removeEWords = function(sentence){
//   let wordsArr = sentence.split(' ');
//   let res = [];

//   for(let i = 0; i < wordsArr.length; i = i + 1){
//     let word = wordsArr[i];
//     let isEWord = checkWord(word);
//     if(!isEWord){
//       res.push(word);
//     }
//   }
//   return res.join(' ');
// }

// console.log(removeEWords('hello world'));


/*
I: string
O: string uppercase, the string as given, and the string lowercase
   seperated by ' ... ';

hElLo
-> 'HELLO ... hElLo ... hello'

--Plan
1. upper + sep + input + sep + lower

a) uppercase a word
b) lowercase a word
c) return the same word as the input
d) return the results with the seperator
*/

// let upper = function(word){
//   return word.toUpperCase();
// };

// // console.log(upper('hello'))

// let lower = function(word){
//   return word.toLowerCase();
// };

// // console.log(lower('HEllO'));

// let sameWord = function(word){
//   return word;
// };

// // console.log(sameWord('HEllO'));

// let compile = function(start, mid, end, sep){
//   return start + sep + mid + sep + end;
// }

// // console.log(compile('a', 'aa', 'aaa', ' %%% '))

// let echo = function(word){
//   let start = upper(word);
//   let mid = sameWord(word);
//   let end = lower(word);

//   let res = compile(start, mid, end, ' ... ')
//   return res;
// }

// console.log(echo('hElLo'));


/*
print numbers in the range of 1 -> input number
if they are divisble evenly by 3 or 5
but not three and 5
*/

// let divBy5 = function(num){
//   return num % 5 === 0;
// }

// let divBy3 = function(num){
//   return num % 3 === 0;
// }

// let xor = function(a, b){
//   return (a || b) && !(a && b)
// }

// let fizzBuzz = function(num){
//   let res = [];

//   for(let i = 1; i < num; i++){
//     let x = divBy5(i);
//     let y = divBy3(i);
//     let z = xor(x,y);

//     console.log(i, 'x', x, 'y', y, 'z', z);

//     if(z){
//       res.push(i);
//     }
//   }
//   return res;
// };

// console.log(fizzBuzz(20));

/*
--Understand
I: array and target num
O: boolean, that indicates if two unique ele in array sum to target

--Plan
1. write a func
2. accepts arr and a target num
3. write a nested loop to add the unique pairs to check
against the target
4. return true or false depending on if the target is found.
*/




// let twoSum = function(arr, target){
//   for(let i = 0; i < arr.length; i++){
//     let num1 = arr[i];

//     for(let j = i + 1; j < arr.length; j++){
//       let num2 = arr[j];

//       if(num1 + num2 === target){
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false

// let popper = function(arr, num){
//   let res = [];

//   for(let i = 0; i < num; i++){
//     // code to run
//     res.push(arr.pop());
//     // some number times
//   }

//   return res;
// }



// let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];

// console.log(popper(arr2, 3)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

/*
--Understand
I: array with subarrays of numbers
O: the product of all the numbers

--Plan
1. declare a product variable = 1
2. loop to iterate through outer arr
3. var subarr for each el
4. loop through subarr
5. var num for each el
6. product *= num
7. return product
*/

// let twoDProd = function(arr){
//   let product = 1;

//   for(let i = 0; i < arr.length; i++){
//     let subArr = arr[i];

//     for(let j = 0; j < subArr.length; j++){
//       let num = subArr[j];
//       product *= num;
//     }
//   }
//   return product
// }


// let arr1 = [
//   [6, 4],
//   [5],
//   [3, 1]
// ];

// console.log(twoDProd(arr1)); // 360



/*
1. make function
2. split words into array
3. var curLongest words[0]
4. loop through words
5. if word longer currLongest
6. if yes change to word
7. return curLong
*/

// let longestWord = function(sentence){
//   if(sentence === ''){
//      return null;
//   }

//   let wordsArr = sentence.split(' ');
//   let longest = wordsArr[0];

//   for(let i = 1; i < wordsArr.length; i++){
//     let word = wordsArr[i];
//     if(word.length > longest.length){
//       longest = word;
//     }
//   }
//   return longest;
// }

// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // null
