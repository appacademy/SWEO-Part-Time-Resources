// Write a function hipsterfy(sentence) that takes in 
// a sentence string and returns the sentence where every 
// word is missing its last vowel.

let removeLastVowel = function(word){
  let vowels = 'aeiou';
  let chars = word.split('');

  for (let i = chars.length - 1; i >=0; i--){
    if (vowels.includes(chars[i])){
      chars.splice(i, 1);
      break;
    }
  }
  return chars.join('');
}

// console.log(removeLastVowel('apple'))

let hipsterfy = function(sentence){
  // iterate through each word, find the last vowel, remove it. replace the word in the sentence.
  let words = sentence.split(' ');

  for (let i = 0; i < words.length; i++){
    words[i] = removeLastVowel(words[i])
  }
  return words.join(' ');
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'