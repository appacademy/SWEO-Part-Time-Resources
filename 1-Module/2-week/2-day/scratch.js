// // Understand
// return only the words not containing "e" (str)

// // Plan
// - function expression (params = sentence(str))
// - split sentence into words (.split), create variable
// - for loop
//   - start: i = 0
//   - end: words.length
//   - step: + 1
// - grab word (words[i])
// - check if word has "e" (.includes)
//   - if true, remove word from words array (.splice) (DID NOT WORK)
// return words array (.join(" "))

let removeEWords = function(sentence) {
    let words = sentence.split(" ");
    let nonEWords = [];
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      
      if (!word.includes("e")) {
        nonEWords.push(word);
      };
    };
    
    return nonEWords
};


// // Understand
// return words.length > 5 (new array)

// // Plan 
// - function declaration (params = words (arr))
// - create variable to hold all long words
// - for loop
//   - start: i = 0;
//   - end: words.length
//   - step: + 1
// - grab word (words[i])
// - if (word.length > 5)
//   - if true, add it to my long words array
// - return long word array

function longWords(words) {
    let bigWords = [];
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      
      if (word.length > 5) {
        bigWords.push(word);
      };
    };
    
    return bigWords;
  }