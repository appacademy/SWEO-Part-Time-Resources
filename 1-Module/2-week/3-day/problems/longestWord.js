// Write a function longestWord(sentence) that takes in a sentence 
// string as an argument. The function should return the longest word 
// in the sentence.

let longestWord = function(str){
  let words = str.split(' ');
  let longest = words[0]
  for (let i = 1; i < words.length; i++){
    if (longest.length < words[i].length) longest = words[i];
  }
  return longest;
}


console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''