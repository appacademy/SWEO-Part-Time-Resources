/*
Write a function that removes all of the consonants
from a string and returns that new string.

Write your function in function expression syntax.
Use the Array.splice method in your implementation.

Feel free to look up the Array.splice method on MDN.
*/

/*
--Understand
I: String
O: String -> return only vowels

--Plan
-we need to use expression syntax
-we need to use splice
  -we need to convert the string to an array
  -String.split

1. We need to define a func
2. We need to split the string on ''

*/


let removeConst = function(string){
  let vowels = 'aeiou';
  let letterArr = string.split('');
  let res = [];

  for(let i = 0; i < letterArr.length; i++){
    let letter = letterArr[i];
    if(vowels.includes(letter)){
      let vowel = letterArr.splice(i,1);
      res = res.concat(vowel);
    }
  }
  return res.join('');
}

// console.log(removeConst('hello'));

/*
--Rotate Right

Write a function rotateRight(array, num) that takes
in an array and a number as args. The function should
return a new array where the elements of the array are
rotated to the right num times. The function should not
mutate the original array and instead return a new array.

Define this function using function expression syntax.

HINT: you can use Array's slice() method to create a
copy of an array
*/

/*
--Understand
I: Array, num
O: New Array, with the elements rotated to the right
   num amount of times.

-- Plan
1. No mutation.
2. Use slice to copy the og array, to avoid mutation.
3. For loop
  a) We want to repeat an action, a certain number of times.
4. Inside that loop, we want to do our rotation.
  a) pop off the last element, store it in a variable
  b) unshift the popped el onto the start of the arr
5. return the rotated array
*/

let rotateRight = function(arr, num){
  let copy = arr.slice();

  for(let i = 0; i < num; i++){
    let popped = copy.pop();
    copy.unshift(popped);
  }

  return copy;
}

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

/*
--Avg Value

Write a function avgVal(arr) that accepts an array as an arg.
 The function should return the average of all values in
 the array. If the array is empty, it should return null.
*/

let avgVal = function(arr){
  if(arr.length === 0){
    return null
  }

  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    sum += num;
  }

  return sum / arr.length;
}



// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null





/*
--Remove E Words

Write a function removeEWords(sentence) that accepts a
sentence string as an arg. The function should return a
new string, containing only the words that don't have the
letter "e" in them.
*/

let removeEWords = function(sentence){
  let wordsArr = sentence.split(' ')
  let res = []

  // remove all words with e
  // iterate, checking each word, case sensitive for e
  for(let i = 0; i < wordsArr.length; i++){
    let word = wordsArr[i];
    if(!word.includes('e') && !word.includes('E')){
      res.push(word);
    }
  }
  return res.join(' ');
}


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
