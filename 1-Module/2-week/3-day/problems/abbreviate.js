// Write a function abbreviate(word) that takes in a string arg. 
// The function should return a new string where all of its vowels are removed.


function abbreviate(word){
  // iterate through our word
  // check if each char is a vowel
  // if it is not, add it to a new string
  // return that string

  let newWord = '';
  let vowels = 'aeiou';

  for (let i = 0; i < word.length; i++){
    if (!vowels.includes(word[i].toLowerCase())) newWord += word[i];
  }

  return newWord;
}



console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'