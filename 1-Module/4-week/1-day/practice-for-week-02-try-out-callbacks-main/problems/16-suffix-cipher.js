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

// console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

function suffixCipher(sentence, cipher) {
	const words = sentence.split(' ') // ['quitely', 'and', 'gently', 'visualize']
	const newArray = words.map((word)=>{
		const keys = Object.keys(cipher) // ['ly', 'ize']

		for(let i = 0; i < keys.length; i++){
			const currentKey = keys[i] // ly
			const currentCallback = cipher[currentKey] // function(word) { return word.toUpperCase();},
			if(word.endsWith(currentKey)) { // quitely does this word end with ly?
				return currentCallback(word)
			}
		}

		return word
	})


	return newArray.join(' ')
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
