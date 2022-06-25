// // Understand
// return new sentence with vowels removed from long words

// // Plan (helper)
// - func declaration (params = word (str))
// - create vowels variable ("aeiou")
// - create variable for consonants = ""
// - for loop
//   - start: i = 0
//   - end: word.length
//   - step: + 1
// - grab letter (word[i])
// - conditional (is letter a vowel)
//   - if false, add letter into consonants
// - return consonants

function removeVowels(word) {
    let vowels = "aeiouAEIOU";
    let consonants = "";
    
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      
      if (!vowels.includes(letter)) {
        consonants += letter;
      };
    };
    
    return consonants;
  };
  
  function abbreviateWords(sentence) {
    let words = sentence.split(" ");
    let newWords = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      
      if (word.length > 4) {
        let newWord = removeVowels(word);
        
        newWords.push(newWord);
        // console.log(i, newWords)
      } else {
        newWords.push(word);
        // console.log(i, newWords)
      };
    };
    
    return newWords.join(" ");
  };
  
  // // Plan (main)
  // - func declaration (params = sentence (str))
  // - split sentence into words (.split = arr)
  // - create variable to hold new words = []
  // - for loop
  //   - start: i = 0
  //   - end: words.length
  //   - step: + 1
  // - grab word (words[i])
  // - conditional (if word.length > 4)
  //   - if true, pass word into helper function
  //     - add result into new words
  //   - if false, add word into new words
  // - return new words (.join)