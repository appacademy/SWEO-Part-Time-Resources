/*NOTES LINK (ctrl + left-click to open): 
https://hackmd.io/ibCTcNIERy2irC8OUTRcFQ?view#Helper-Functions
*/

'------------------Let\'s talk about Helper Functions----------------------'

// Helper functions are useful to keep the complexity of your functions low. They help us break larger problems
// down into smaller ones. If you think about it, we've already been using helper functions! Each method we've used
// such as .toLowerCase() or .includes() is a helper function! It's up to you whether to create a helper 
// function or not. Most of the time if you find yourself writing a lot of conditional code inside your for loops,
// a helper function might be the way to go.  
// having that code in separate functions will keep everything more readable. Helper functions don't only apply to
// for loops, but they are a good example of when to use one. You can use Helpers anywhere for any reason.

// Say we have a problem, where we want to take every word with 5 or less characters and replace all the vowels 
// with an 'x' , and for every word that is 6 or more characters we want to remove all the vowels. Helper functions 
// could come in handy here!



let changeVowelsToX = function(word){
  let chars = word.split('');
  let vowels = 'aeiou';
  for (let i = 0; i < chars.length; i++){
    if (vowels.includes(chars[i])) chars[i] = 'x';
  }
  return chars.join('');
}

let removeVowels = function(word){
  let vowels = 'aeiou';
  let newWord = '';

  for (let i = 0; i < word.length; i++){
    if (!vowels.includes(word[i])) newWord += word[i]
  }
  return newWord;
}


let changeWords = function(sentence){
  let words = sentence.split(' ');

  for (let i = 0; i < words.length; i++){
    let word = words[i];
    if (word.length <= 5){
      words[i] = changeVowelsToX(word);
    } else {
      words[i] = removeVowels(word);
    }
  }

  return words.join(' ');
}

let tweet = 'I just spent 3 hours walking around town playing pokemon go and I feel great!'
console.log(changeWords(tweet));

// I personally love helper functions. I don't like having a lot of complexity in my loops and if I find myself
// adding a lot of code inside of my conditionals in those loops I will usually move that to a helper. Sometimes
// you dont think to create a helper function at first, and it's not until you come back to refactor and try to 
// simplify your code that you create them. That's fine! Again, it's your choice whether to use one or not!