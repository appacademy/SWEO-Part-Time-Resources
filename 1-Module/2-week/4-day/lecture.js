// let uncompress = function(str){
// 	let result = [] // so he can pass in his values to return as an answer

// 	for(let i = 1; i < str.length; i+=2){ // because we would check index of 1 cause 0 is a
// 		let word;						  // char
// 		// x1b2c3
// 		// y10b2c3
// 		if(Number(str[i - 1]) == str[i -1] && Number(str[i]) == str[i]){ // we are comparing if in the example we
// 												  						// passing 'x' then number would
// 												  						// result to NaN which would be false
// 												  						// if case both are numbers are true
// 												  						// then we know its 10
// 			word = str[i - 2].repeat(10)
// 			i++ // we do this to offset the index by 1
// 		} else {
// 			word = str[i - 1].repeat(Number(str[i])) // because i would be where that single digit
// 		}
// 		result.push(word)
// 	}
// 	return result.join('')
// }

// // let uncompress = function(str){
// // 	let result = []

// // 	for(let i = 1; i < str.length; i+=2){ // because we would check index of 1 cause 0 is a
// // 		let word;						  // char
// // 		word = helper(str, word, i)
// // 		result.push(word)
// // 	}
// // 	return result.join('')
// // }

// // let helper = function(str, word, i){
// // 	if(Number(str[i - 1]) == str[i -1] && Number(str[i]) == str[i]){
// // 		word = str[i - 1].repeat(10)
// // 	} else {
// // 		word = str[i - 1].repeat(str[i]) // because i would be where that single digit
// // 	}
// // 	return word
// // }


// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b10o2t1')); // 'boot'


// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged // main function
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

let repeatingTranslate = function(sentence){

	let sentencedSplit = sentence.split(' ') // ['we', 'like', 'to', 'go', 'running', 'fast']
	let result = '';

	for(let i = 0; i < sentencedSplit.length; i++){
		let currentWord = sentencedSplit[i] // 'we'
		if(currentWord.length < 3){
			result += currentWord + ' '
		} else {
			result = translateWord(currentWord, result)
		}
	}

	return result

}

let translateWord = function(currentWord, result){
	let vowels = 'aeiouAEIOU';

	let lastChar = currentWord[currentWord.length - 1] // 'e'

	if(vowels.includes(lastChar)){
		result = result + currentWord + currentWord + ' '
	} else {
		// fast
		let indexWhereWeFoundOurVowel = 0; // 0, 1
		for(let j = 0; j < currentWord.length; j++){
			let char = currentWord[j] //f, a
			if(vowels.includes(char)){ // false
				indexWhereWeFoundOurVowel = j
			}
		}

		result = result + currentWord + currentWord.slice(indexWhereWeFoundOurVowel) + ' '
	}
	return result
}


console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
