/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

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
*******************************************************************************/
// ----with map method-----
function suffixCipher1(sentence, cipher) {
  let words = sentence.split(" ");
  let newWords = words.map(function(word) {
    for (let suffix in cipher) {
      if (word.endsWith(suffix)) {
        let cb = cipher[suffix];
        return cb(word);
      }
    }
    return word;
  });
  return newWords.join(" ");
}

//------with normal for loop-------
//for this one, we'll need a boolean to check if word has been added already, else add original
function suffixCipher(sentence, obj) {
  let words = sentence.split(" ");
  let newStr = [];
  for(let i=0; i<words.length; i++){ //iterate each word
    let current_word = words[i];
    let has_already_been_added= false; //default add the word
    for(let key in obj){ //loop through keys (2, ly and ize) and see if word contains any of the suffix
      let cb = obj[key];
      if(current_word.endsWith(key)){ //if word ends in suffix
        newStr.push(cb(current_word));
        has_already_been_added = true; //make sure to not add repeat
      }
    }
    if(has_already_been_added === false){ //return original word if at the end, word has none of those suffix (word has not been added yet)
      newStr.push(current_word);
    }
  }
  return newStr.join(" ");
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
module.exports = suffixCipher;
