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
// mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'

// mostFreqLetterHelper is a helper function that should take a counter object, and return the letter that shows up the most time.
//mostFreqLetterHelper({o:3, i:2, e:2}) --> 'o'
const mostFreqLetterHelper = (counterObj) => {
  let mostLetter = "";
  let mostValue = 0;
  for(let letter in counterObj){
    const value = counterObj[letter]
    //is the value of that letter bigger than the mostValue?
    if(value > mostValue){
      mostLetter = letter;
      mostValue = value;
    }
  }

  //finally reached the end, give me the biggest letter
  return mostLetter;
}

//counter = {o:3, i:2, e:2}
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const mostFrequentVowel = function (words, counter = {}) {
  //part 0: determine the base case to stop at - words.length is 0 / empty then we want to return ""
  if(words.length === 0) return "";

  //part 1: take the front item of words to get the word and then grab all the vowels and add it to counter.
  const frontWord = words[0]; //'dog'
  //iterate through the word, 
  for(let i=0; i<frontWord.length; i++){
    const letter = frontWord[i]; //'d' , 'o', 'g'
    // if letter is a vowel, add to counter
    if(VOWELS.includes(letter)){
      //if the letter exists in counter, then increment the value by 1 (++)
      if(letter in counter){
        counter[letter] += 1;
      }
      //otherwise, set the default letter as the key and the inital value as 1
      else{
        counter[letter] = 1;
      }
    }
  }
  
  //part 3: now we need to repeat part 1, but for the REST of the WORDS.
  mostFrequentVowel(words.slice(1), counter)
  // console.log("counterObj", counter);
  
  //part 4: now we need to take the counter obj that we've built, then determine which letter shows up the most time, and return THAT LETTER
  const mostFreqResult = mostFreqLetterHelper(counter);
  return mostFreqResult;
}

console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'

console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}