// let uncompress = function(str){
// 	let numbers = '123456789'

// 	let strSplit = str.split('')
// 	console.log(strSplit, ' ------->') // [ 'x', '3', 'y', '4', 'z', '2' ]
// 	let num = 0;
// 	let filtered = [];

// 	for(let i = 0; i < strSplit.length; i++){
// 		let char = strSplit[i]
// 		if(numbers.includes(char)){
// 			num = numChecker(char);
// 			let letter = strSplit[i - 1]
// 			for(let j = 0; j < num; j++){
// 				filtered.push(letter)
// 			}
// 		}

// 	}
// 	return filtered.join('')
// }

// let numChecker = function(str){
// 	return Number(str)
// }


// // meghas
// function uncompress(str){
//     let chars = "abcdefghijklmnopqrstuvwxyz"
//     let newStr = ''
//     for(let i = 0; i < str.length; i++){
//       let char = str[i] // odds will always be char
//       let num = str[i+1] // even will always be number
//       if(chars.includes(char)){
//          newStr += char.repeat(num);
//       }
//     }
//   return newStr;
//   }


// console.log(uncompress("x2"))

// // let uncompress = function(str) {
// //     let newStr = '';

// //     for (let i = 0; i < str.length; i += 2) {
// //         let char = str[i];
// //         let num = Number(str[i + 1]);

// //         for (let times = 0; times < num; times += 1) {
// //             newStr += char;
// //         }
// //     }

// //     return newStr;
// // };


// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

// Alternating Words
// Write a function alternatingWords
// that accepts an array of words as an argument.
// The function should mutate the input array such that
// the words alternate between fully uppercase or lowercase.
// The first word should be uppercase.


// Mutate the array

// Your code here
// let alternatingWords = function(words){
// 	for(let i = 0; i < words.length; i++){
// 		// if ( i % 2 === 0){
// 		// 	words[i] = words[i].toUpperCase();
// 		// } else {
// 		// 	words[i] = words[i].toLowerCase();
// 		// }
// 		console.log(words, 'words <------')
// 		console.log(i, ` i <--------`)
// 		lowerIfOddElseUpper(i, words) // array[i]
// 	}
// };

// let lowerIfOddElseUpper = function(num, words){
// 	console.log(words[num], ' our word thats going to be mutated')
// 	if ( num % 2 === 0){
// 		words[num] = words[num].toUpperCase();
// 	} else {
// 		words[num] = words[num].toLowerCase();
// 	}
// }


// let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan']; //
// alternatingWords(words1);
// // console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

// let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
// alternatingWords(words2);
// // console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

// Max in Matrix
// Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix)
// and returns the largest value in the matrix. The matrix contains at least one value.


// function maxInMatrix(matrix) {
// 	//let largest = matrix[0][0];
// 	let largest = -Infinity;

// 	for(let row = 0; row < matrix.length; row++){
// 		// console.log(matrix[row], '------> row')
// 		let column = matrix[row]
// 		for(let col = 0; col < column.length; col++){
// 			// console.log(matrix[row][col], ' current number')
// 			let currentNumber = matrix[row][col]
// 			// if(largest < currentNumber){
// 			// 	largest = currentNumber
// 			// }
// 			largest = getLargest(largest, currentNumber)
// 		}
// 	}

// 	return largest
// }

let getLargest = function(num1, num2){
	// if(num1 > num2){
	// 	return num1
	// } else {
	// 	return num2
	// }
	return num1 > num2 ? num1 : num2
}

// matrix = [[11,  2,-99],
//           [20, 19, 10],
//           [47, 72, 56]]

// console.log(maxInMatrix(matrix)); // 72


// Max in Columns
// Write a function maxColumn(matrix) that takes in a 2-dimensional
// array (matrix) and returns an array containing the maximum value in each
// column. The array length should be equal to the number of columns,
// such that returnArrayi is equal to the max value in the ith column.



function maxColumn(matrix) {
	let row = matrix.length; // 4
	let column = matrix[0].length; // 3

	let maximumNumbers = []; // [24]

	for(let col = 0; col < column; col++){
		let currentColumnNumber = matrix[0][col] //
		maximumNumbers[col] = currentColumnNumber //
		// console.log('currentColumn ---->', currentColumn)
		for(let r = 0; r < row; r++){
			let currentNumber = matrix[r][col] //
			// console.log('currentNumber ------> ', currentNumber)
			// if(maximumNumbers[col] < currentNumber){
			// 	maximumNumbers[col] = currentNumber
			// }
			maximumNumbers[col] = getLargest(maximumNumbers[col], currentNumber);
		}
	}

	return maximumNumbers
}


  matrix = [[ 5,  9, 21],
			[ 9, 19,  6],
			[12, 14, 15],
			[24, 36, 45]]

  matrix2 = [[ 5,  9, 21, -15, 20],
			[ 9, 19,  6, 0, 100],
			[12, 14, 15, 47, 89],
			[24, 36, 45, 1000, 64]]

  matrix3 = [[1,2],
			  [3,4]]

  console.log(maxColumn(matrix)); // [24, 36, 45]
  console.log(maxColumn(matrix2)); // [24, 36, 45, 1000, 100]


// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
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

// Your code here

// 1.iterate through the string and get each word
// 2.split that str up into individual words
// 3.iterate through the split words
// 4.conditionals to check if is short
// 5.else if it has a vowel at the end we double it
// 6.else make copy of word starting from vowel to the end
// 7.return the newly created word

let repeatingTranslate = function(str){
	let newSent = str.split(' ');
	let newWords = [];

	for(let i = 0; i < newSent.length; i++){
		let word = newSent[i];
		if(word.length < 3){
			newWords.push(word)
		} else {
			newWords.push(checkWord(word))
		}
	}

	return newWords.join(' ');
}

// checks last character if vowel
// moving the word starting from vowel to the end

let checkWord = function(word){
	let vowels = 'aeiou';
	let lastCharacter = word[word.length - 1]; // gets last character
	if(vowels.includes(lastCharacter)){
		return word.repeat(2)
	} else {
		for(let i = word.length - 1; i >= 0; i--){
			let char = word[i]
			if(vowels.includes(char)){
				return word + word.slice(i)
			}
		}
	}
}


console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
