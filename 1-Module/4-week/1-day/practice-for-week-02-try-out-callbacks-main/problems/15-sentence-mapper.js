/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/

let sentenceMapper = function (sentence, cb) {
	let myArray = sentence.split(' ')
	return myArray.map(cb).join(' ')

	// let myArray = []
	// const result = []
	// let currentWord = ''
	// let resultWord = ''

	// for(let i = 0; i < sentence.length; i++){
	// 	const el = sentence[i]
	// 	if(el == ' '){
	// 		myArray.push(currentWord)
	// 		currentWord = ''
	// 	} else {
	// 		currentWord += el
	// 	}
	// }

	// for(let i = 0; i < myArray.length; i++){
	// 	const word = myArray[i]

	// 	result.push(cb(word))
	// }

	// for(let i = 0; i < result.length; i++){
	// 	const word = result[i]
	// 	resultWord = resultWord + word + ' '
	// }

	// return resultWord

};

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

// let removeVowels = function(word) {
//     let newWord = "";
//     for (let i = 0; i < word.length; i++) {
//         let char = word[i];
//         if (!"aeiou".includes(char)) {
//             newWord += char;
//         }
//     }
//     return newWord;
// };

// let result2 = sentenceMapper("this is pretty cool right", removeVowels);
// console.log(result2); // 'ths s prtty cl rght'

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = sentenceMapper;
} catch (e) {
  return null;
}
