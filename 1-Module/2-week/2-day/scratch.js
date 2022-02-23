
// made sure to declare a function that accepts a string
// iterate through the strings length
// check for the vowels easier than consonants
// splicing the word
// place the vowels into an array
// return array as a new string


let word = function(string){
	let vowels = 'aeiouAEIOU';
	let result = [];
	let splitString = string.split('') // ['t', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k']

	// string.split() // ['the quick brown fox']
	// string.split(' ') // ['the', 'quick', 'brown', 'fox']

	for( let i = 0; i < splitString.length; i++){
		if(vowels.includes(splitString[i])){
			result.push(splitString[i])
		} else if (splitString[i] === ' '){
			// result.push(splitString[i])
			result.push(' ')
		}
	}


	return result.join('')
}


let removeConsonantsSplice = function(string){
	let vowels = 'aeiouAEIOU ';
	let chars = string.split('')

	// chars.length = 13
	// chars.length = 12
	for (let i = 0; i < chars.length; i++){
		if(!vowels.includes(chars[i])){
			chars.splice(i, 1)
			i--
		}
	}

	return chars.join('')
}

// if we dont have i--
// i = 0, chars[i] === t // 'the quick brown fox'
// i = 1, chars[i] === e // 'he quick brown fox'

// if we have i--
// i = 0, chars[i] === t // 'the quick brown fox'
// i = 0, chars[i] === h // 'he quick brown fox'

console.log(word('the quick brown fox' )) // 'e ui o o'
console.log(word('immutable data types')) // 'iuae aa e'
console.log(removeConsonantsSplice('the quick brown fox' )) // 'e ui o o'
console.log(removeConsonantsSplice('immutable data types')) // 'iuae aa e'
