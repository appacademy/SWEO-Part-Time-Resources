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

***********************************************************************/

// const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// const mostFrequentVowel = function (words, counter = {}) {
//   // Your code here
//   if(words.length === 0){
//     let highest = 0;
//     let vowel = ""
//     for (let keys in counter){
//       let val = counter[keys]
//       if(val> highest){
//         highest = val
//         vowel = keys
//       }
//     }
//     // console.log("HERE", vowel)
//     return vowel
//   }

//   let popped = words.pop()
//   for(let i = 0; i < popped.length; i++){
//     let letter = popped[i]
//     if(VOWELS.includes(letter)){

//       if(counter[letter] === undefined){
//         counter[letter] = 1
//       } else {
//         counter[letter]++
//       }
//     }
//   }
//   // console.log(counter)


//     return mostFrequentVowel(words, counter)

// }

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const mostFrequentVowel = function (words, counter = {}) {
  //base
  if (words.length === 0) {
    return '';
  }
  //recursive step
  let lastString = words[words.length - 1];
  //iterate through
  for (let i = 0; i < lastString.length; i ++) {
    let letter = lastString[i];
    if (VOWELS.includes(letter)) {
      // console.log(letter);
      if (counter[letter] === undefined) {
        counter[letter] = 1;
      } else {
        counter[letter] += 1;
      }
    }
  }
    // console.log(counter);
    if (words.length === 1) {
    let keys = Object.keys(counter);
    let values = Object.values(counter);
    let max = Math.max(...values);
    // console.log(keys, values);
    for (let j = 0; j < values.length; j ++) {
      if (values[j] === max) {
        return keys[j]
      }
    }
  }
      // console.log(words);
  return mostFrequentVowel(words.slice(0, words.length - 1), counter);
    }

console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
