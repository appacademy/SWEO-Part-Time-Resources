// let uncompress = function (str) {
//   // every even number index is a char
//   // every odd number index is the number of times
//   // save to final string
//   // character "odd index" number of times
//   let finalStr = '';

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       let currentChar = str[i];
//       let num = Number(str[i + 1]);

//       for (let j = 0; j < num; j++) {
//         finalStr += currentChar;
//       }
//     }
//   }

//   return finalStr;
// };

// let uncompress = function (str) {
//   // every even number index is a char
//   // every odd number index is the number of times
//   // save to final string
//   // character "odd index" number of times
//   let finalStr = '';

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       let currentChar = str[i];
//       let num = Number(str[i + 1]);
// 			finalStr += currentChar.repeat(num)
//     }
//   }

//   return finalStr;
// };

// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

// first char is at 0 index
// second char is at 2 index
// third char is at 4 index

// let removeLastVowel = function (string) {
//   let vowels = 'aeiouAEIOU';

//   for (let i = string.length - 1; i >= 0; i--) {
//     let currentChar = string[i];

//     if (vowels.includes(currentChar)) {
//       string = string.slice(0, i) + string.slice(i + 1);
//       return string;
//     }
//   }
// };

// console.log(removeLastVowel('Apple')); // Appl
// console.log(removeLastVowel("That")) // Tht
// console.log(removeLastVowel("Watermelonnnnn")) // Watermelnnnnn
// console.log(removeLastVowel("Boot")) // Bot

// let hipsterfy = function (sentence) {
//   let arr = sentence.split(' ');

//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     arr[i] = removeLastVowel(word);
//     // word = removeLastVowel(word); // will not work

//   }

//   return arr.join(' ');
// };

// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// let arr = [1, 2, 5, 4, 5]

// console.log(arr)

// arr[2] = 3

// console.log(arr)

// let rotate = function (array, num) {
// console.log(num)
// console.log(Math.abs(num))
// console.log(num)
// 	i = 0
//   ['a', 'b', 'c', 'd', 'e']; start
//   ['a', 'b', 'c', 'd']; pop
//   ['e', 'a', 'b', 'c', 'd']; unshift

//   i = 1
//   ['e', 'a', 'b', 'c', 'd']; start
//   ['e', 'a', 'b', 'c']; pop
//   ['d', 'e', 'a', 'b', 'c']; unshift

// for (let i = 0; i < Math.abs(num); i++) {
//   	// if num > 0
//   	if (num > 0) {
// 		// if yes, then do right rotate
// 			// take off back, move to front
//         	let val = array.pop()
//           array.unshift(val)
//       } else {
// 		// if no, do left
// 			// take off front, move to back
//         	let val = array.shift()
//           array.push(val)
//       }
// }
//   return array
// }

// let rotate = function (array, num) {
// 	if (num > 0) {
//       for (let i = 0; i < num; i++) {
//           	let val = array.pop()
//             array.unshift(val)
//         }
//   	} else {
//         for (let i = 0; i < -num ; i++) {
//           	let val = array.shift()
//             array.push(val)
//   		}
//     }

//   return array
// }

// let rotate = function (array, num) {
//   	let direction = num > 0
//     if (direction === true) {
//       for (let i = 0; i < num; i++) {
//           	let val = array.pop()
//             array.unshift(val)
//         }
//     }
//   	} else {
//         for (let i = 0; i < -num ; i++) {
//           	let val = array.shift()
//             array.push(val)
//   		}
//     }

//   return array
// }

// let rotate = function(array, num){
// 	positiveHelper(array, num)

//   	negativeHelper(array, num)

//   return array
// }

// let positiveHelper = function(array, num){
//  	if (num > 0){
//     	for ( let i = 0; i < num; i++){
//          	let last = array.pop()
//             array.unshift(last)
//         }
//     }
// }
// let negativeHelper = function(array, num){
//  	if (num < 0){
//     	for (let i = 0; i < -num; i++){
//          	let first = array.shift()
//             array.push(first)
//         }
//     }
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

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

// let endsWithVowel = function (word) {
//   return word + word;
// };

// let notEndsWithVowel = function (word) {
//   let vowels = 'aeiouAEIOU';

//   // iterate through word backwards
//   for (let i = word.length - 1; i >= 0; i--) {
//     // find last vowel
//     let currChar = word[i];

//     if (vowels.includes(currChar)) {
//       // slice from vowel index, and add to end of word
//       // console.log(word);
//       // console.log(word.slice(i));
//       // console.log(word + word.slice(i));
//       return word + word.slice(i);
//     }
//   }
// };

// notEndsWithVowel('running');

// let repeatingTranslate = function (sent) {
//   let arr = sent.split(' ');
//   let vowels = 'aeiouAEIOU';

//   let finalArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let currWord = arr[i];

//     if (currWord.length < 3) {
//       // - words that are shorter than 3 characters are unchanged
//       finalArr.push(currWord);
//     } else {
//       // - words that are 3 characters or longer are translated according to the
//       //   following rules:
//       //   - if the word ends with a vowel,

//       if (vowels.includes(currWord[currWord.length - 1])) {
//         finalArr.push(endsWithVowel(currWord));
//       } else {
//         finalArr.push(notEndsWithVowel(currWord));
//       }
//     }
//   }

//   return finalArr.join(' ');
// };

// console.log(repeatingTranslate('we like to go running fast')); // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
