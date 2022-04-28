function reverseSentence(sentence){
	let words = sentence.split(" "); //array of all words
  	words.reverse(); //reverse mutates original array.
  	return words.join(" ");
    
}





console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'