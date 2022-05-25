let removeEWords = function(str){
	let words = str.split(' ');
  	// console.log(words);
  	for (let i = 0; i < words.length; i++){
    	let word = words[i];
      	// console.log('word before the conditional is', word);
      	if (word.toLowerCase().includes('e')){
        	words.splice(i, 1);
          	// console.log('words after the splice', words) 
          	if (i === 0) i = -1; // if you don't include this, when we remove 'Enter', 'the' becomes index 0. 
          // the i will increment to 1 on the next iteration and skip 'the' since 'building' is now index 1.
        }
    }
  return words
}

// console.log('the'.includes('e'))


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'