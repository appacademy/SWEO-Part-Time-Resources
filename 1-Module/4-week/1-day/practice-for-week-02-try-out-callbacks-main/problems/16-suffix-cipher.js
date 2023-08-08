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

function suffixCipher(sentence, cipher) {

	let words = sentence.split(' ') // [quietly, and, gently, visualize]

	return words.map(el => { // el = quitely
		let keys = Object.keys(cipher) // [ly, ize]

		// for(let i = 0; i < keys.length; i++){
		// 	let currentKey = keys[i] // ly
		// 	if(el.endsWith(currentKey)){ // el = quitely endswith === ly
		// 		let currentValueCallback = cipher[currentKey] // function = cb, function = cb
		// 		return currentValueCallback(el) // quietlee
		// 	}
		// }

		keys.forEach((key, i) => {
			let currentKey = keys[i]
			if(el.endsWith(currentKey)){
				let currentValueCallback = cipher[currentKey]
				el = currentValueCallback(el)
			}
		})

		return el
	}).join(' ');
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
try {
  module.exports = suffixCipher;
} catch(e) {
  return null;
}
