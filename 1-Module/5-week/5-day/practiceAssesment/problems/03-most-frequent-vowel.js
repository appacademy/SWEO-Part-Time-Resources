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
***********************************************************************/
// base case
// if words .length 
// check if counter is an empty obj, if so return an empty string 
// otherwise, I am going to find the highest value in my object and return the key 


// pop off the last element of the words array, giving me a word in isolation
// looop over that word,
// create a variable for each letter in isolation
// if my letter is a vowel, 
// I will check to see if that vowel exists as a key in my object,
// if it does I will increment th value at that key by one 
// if not I will se that value to 1

const findVowels = (myWord, counter) => {
  myWord.split('').forEach(ele => {
    if(VOWELS.filter(element => element === ele)[0]!== undefined){
      if(ele in counter) {
        counter[ele] +=1
      }else {
        counter[ele] =1
      }
    }
  })
  return counter
}
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const mostFrequentVowel = function (words, counter = {}) {
  if(words.length === 0){
    if(Object.keys(counter).length === 0){
      return ''
    }else {
      let myHighestVal = 0;
      let myHighestKey = ''
      for(let key in counter){
        if(counter[key] > myHighestVal){
          myHighestVal = counter[key]
          myHighestKey = key
        }
      }
      return myHighestKey
    }
  }

  let myWord = words.pop()
  counter = findVowels(myWord, counter)
   return mostFrequentVowel(words, counter)
}
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}