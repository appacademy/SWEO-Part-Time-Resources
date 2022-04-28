//1. define a function reverseSentence(sentence)
let reverseSentence = function(sentence){
	let words = sentence.split(" "); // [ 'I', 'am', 'pretty', 'hungry' ]
  	let reverseWords = [];
  	for(let i=words.length-1; i>=0; i--){
		let currentWord = words[i];
      	// console.log(currentWord);
      	reverseWords.push(currentWord);
    }
  	// console.log(reverseWords);
  	let reverseSentence = reverseWords.join(" ");
  	return reverseSentence;
}





console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'