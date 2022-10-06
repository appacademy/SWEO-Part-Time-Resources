/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:


*******************************************************************************/

function suffixCipher(sentence, cipher) {
  // Your code here
  let newSent = sentence.split(" ")
  // console.log(newSent)
  let newWords = []
  for (let i = 0; i < newSent.length; i++){
    let modified = false
    let word = newSent[i]
    // console.log(word)
    for (let suffix in cipher){
          // console.log(suffix)
          if(word.endsWith(suffix)){
            // console.log(word)
            let callback = cipher[suffix]
            // console.log(callback)
            newWords.push(callback(word))
            modified = true
          }
        }
        // console.log(word, modified)
        if(modified === false){

          newWords.push(word)
        }
  }
  // let newWords = newSent.map(function(word){
  //   // console.log(word)
  //   for (let suffix in cipher){
  //     // console.log(suffix)
  //     if(word.endsWith(suffix)){
  //       let callback = cipher[suffix]
  //       // console.log(callback)
  //       return(callback(word))
  //     }
  //   }
  //   return word
  // })
  return newWords.join(" ")
}

let cipher1 = {
  ly: function(word) {
      return word.slice(0, -1) + 'ee';
  },
  ize: function(word) {
      return word + 'r';
  }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
  tal: function(word) {
      return word.toUpperCase();
  },
  s: function(word) {
      return word + 'th';
  }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch(e) {
  return null;
}
