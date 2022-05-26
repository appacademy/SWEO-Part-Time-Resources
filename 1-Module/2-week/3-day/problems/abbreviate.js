// Write a function abbreviate(word) that takes in a string arg. 
// The function should return a new string where all of its vowels 
// are removed.


function abbreviate(word){
  let res = '';
  let vowels = 'aeiou';
  for (let i = 0; i < word.length; i++){
    if (!vowels.includes(word[i].toLowerCase())) res += word[i]
  }
  return res;
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'