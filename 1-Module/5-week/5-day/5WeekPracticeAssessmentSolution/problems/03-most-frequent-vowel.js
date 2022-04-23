/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

Run tests on just this file by typing `npm test test/03-most-frequent-vowel-spec.js`
on the command line.

//! Zaviar's awful terrible (please never do this during an exam) one line
Object.keys(counter).length === 0
      ? ''
      : Object.keys(counter)[
          Object.values(counter).indexOf(Math.max(...Object.values(counter)))
        ];

***********************************************************************/

// conditional ? if true return this code : if false return this code
// if (true) {
// 	run this code
// } if (false) {
// 	run this code
// }

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const findLargestValue = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  if (keys.length === 0) return '';

  let highestNum = Math.max(...values);
  let highestIndex = values.indexOf(highestNum);
  return keys[highestIndex];
};

const mostFrequentVowel = function (words, counter = {}) {
  if (words.length === 0) return findLargestValue(counter);
  // work towards base case by popping words
  const currWord = words.pop();

  // count the number of times we see each letter
  for (let i = 0; i < currWord.length; i++) {
    const currLetter = currWord[i];

    // check if currLetter is a Vowel
    if (VOWELS.includes(currLetter)) {
      if (currLetter in counter) counter[currLetter]++;
      else counter[currLetter] = 1;
    }
  }

  return mostFrequentVowel(words, counter);
};

// words = [];
// counter = {};
// console.log(mostFrequentVowel(words, counter));

// const findVowels = (myWord, counter) => {
//   myWord.split('').forEach((ele) => {
//     if (vowels.filter((element) => element === ele)[0] !== undefined) {
// 			// [i, e] = vowels.filter(a, e, i, o, u)
//       if (ele in counter) {
//         counter[ele] += 1;
//       } else {
//         counter[ele] = 1;
//       }
//     }
//   });
//   return counter;
// };
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const mostFrequentVowel = function (words, counter = {}) {
//   if (words.length === 0) {
//     if (Object.keys(counter).length === 0) {
//       return '';
//     } else {
//       let myHighestVal = 0;
//       let myHighestKey = '';
//       for (let key in counter) {
//         if (counter[key] > myHighestVal) {
//           myHighestVal = counter[key];
//           myHighestKey = key;
//         }
//       }
//       return myHighestKey;
//     }
//   }

//   let myWord = words.pop();
//   counter = findVowels(myWord, counter);
//   return mostFrequentVowel(words, counter);
// };

// const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// const vowel = 'aeiouAEIOU';
// const mostFrequentVowel = function (words, counter = {}) {
//   // Your code here
//   if (words.length === 0) {
//     return '';
//   }
//   //console.log(words);
//   let popped = words.pop();
//   //console.log(popped);

//   //console.log(popped.split(""));
//   for (let i = 0; i < popped.length; i++) {
//     let currChar = popped[i];

//     if (vowel.includes(currChar) && counter[currChar]) {
//       counter[currChar]++;
//     } else if (vowel.includes(currChar) && !counter[currChar]) {
//       counter[currChar] = 1;
//     }
//   }
//   //console.log(Object.values(counter));
//   mostFrequentVowel(words, counter);

//   if (words.length === 0) {
//     let max = '';
//     let currLetter = '';
//     for (let keys in counter) {
//       let currVal = counter[keys];
//       if (currVal > max) {
//         max = currVal;
//         currLetter = keys;
//       }
//     }
//     return currLetter;
//   }
// };

// const findLargestValue = (obj) => {
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// if (keys.length === 0) return '';

// let highestIndex = 0;
// let currentMax = 0;
// for (let i = 0; i < values.length; i++) {
//   if (values[i] > currentMax) {
//     currentMax = values[i];
//     highestIndex = i;
//   }
// }

// return keys[highestIndex];
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
