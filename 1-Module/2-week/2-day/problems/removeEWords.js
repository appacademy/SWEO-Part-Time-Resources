// your code here
let removeEWords = function(str){
  let words = str.split(' ');
  // console.log(words);
  for (let i = 0; i < words.length; i++){
    let word = words[i];
    console.log('the index is', i)
    console.log('the current word is', word)
    if (word.toLowerCase().includes('e')) {
      words.splice(i, 1);
      if (i === 0) i = -1
      console.log('after the splice', words);
    }
  }
  return words.join(' ')
  // console.log(' ')
}

// console.log('the'.includes('e'))


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'