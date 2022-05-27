// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

let findTheLastVowel = function(word){
  let vowels = 'aeiou';
  for (let i = word.length - 1; i >= 0; i--){
    let char = word[i];
    if (vowels.includes(char)){
      let ending = word.slice(i)
      return word + ending;
    }
  }
  return word;
}

console.log(findTheLastVowel('trash'))

let repeatingTranslate = function(sentence){
  let words = sentence.split(' ');
  let vowels = 'aeiou';
  for (let i = 0; i < words.length; i++){
    let word = words[i]
    if (word.length >= 3){
      if (vowels.includes(word[word.length - 1])){
        words[i] = word + word
      } else {
        words[i] = findTheLastVowel(word);
      }
    }
  }
  return words.join(' ');
}



console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"