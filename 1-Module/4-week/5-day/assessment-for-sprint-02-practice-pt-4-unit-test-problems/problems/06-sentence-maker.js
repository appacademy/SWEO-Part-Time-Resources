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

// Your code here

const sentenceMaker = (...strings) => {
// // console.log(strings)

// let newSent = ''

// strings.forEach((string, idx) =>{
// 	console.log(string)
// 	if(idx === strings.length -1){
// 		newSent += string + "!"
// 	} else{

// 		newSent += string + " "
// 	}
// })

// return newSent


// }

const sentenceMaker = (...strings) => strings.join(" ") + "!"

// let sentence = "";
// 	let array = [...strings];
// 	for(let i = 0; i < array.length; i++){
// 		let el = array[i];
// 		if(i === array.length - 1){
// 			el = array[i] + ""
// 		} else{
// 			el = array[i] + " ";
// 		}
// 		sentence += el;
// 	}
// 	// console.log(sentence);
// 	return sentence + "!";
// }


console.log(sentenceMaker('Hello', 'World')); // 'Hello World!'
console.log(sentenceMaker('I', 'love', 'coding')); // 'I love coding!'
console.log(sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')); // 'The quick brown fox jumps over the lazy dog!'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}
