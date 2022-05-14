/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:

sentenceMaker('Hello', 'World'); // 'Hello World!'
sentenceMaker('I', 'love', 'coding'); // 'I love coding!'
sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'); // 'The quick brown fox jumps over the lazy dog!'
***********************************************************************/

//we can use rest to gather an arbitrary amount of arguments and put them in an array
const sentenceMaker = (...words) => {
	let sentence = "";
	for(let i=0; i<words.length-1; i++){
		const singleWord = words[i];
		sentence += singleWord + " "
	}
	const lastWord = words[words.length - 1]
	return sentence + lastWord + "!";

	// const sentence = words.join(" ") + "!"
	// return sentence;

}

console.log(sentenceMaker('I', 'love', 'coding')); // 'I love coding!'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}
