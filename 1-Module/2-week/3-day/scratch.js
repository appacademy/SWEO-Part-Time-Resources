// let removeEWords = function (sentence) {
//   let arr = sentence.split(' ');

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes('e') || arr[i].includes('E')) {
//       arr.splice(i, 1);
// 			i--
//     }
//   }

//   return arr.join(' ');
// };

// let hasE = function (word) {
//   if (word.toLowerCase().includes('e')) {
//     return true;
//   } else return false;
// };

// let loopAndSplice = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     let currWord = array[i];
//     if (hasE(currWord)) {
//       array.splice(i, 1);
//       i--;
//     }
//   }

//   return array;
// };

// let removeEWords = function (sentence) {
//   let arr = sentence.split(' ');
//   return loopAndSplice(arr).join(' ');
// };

// console.log(removeEWords('Hello World')); // World
// console.log(removeEWords('We are here to learn how to code')); // to how to
// console.log(removeEWords('Eggs are very tasty')); // tasty

// let yell = function (string) {
//   return string.toUpperCase();
// };

// let whisper = function (string) {
//   return string.toLowerCase();
// };

// let echo = function (string) {
//   return yell(string) + ' ... ' + string + ' ... ' + whisper(string);
// };

// console.log(echo('Hello')); // 'HELLO ... Hello ... hello
// console.log(echo('PiNeAppLE')); // 'PINEAPPLE ... PiNeAppLE ... pineapple

// console.log(yell("i love elden ring"))

//! Reverse Sentence
// let reverseSentence = function (string) {
// 	let arr = string.split(' ');
// 	let newString = '';
// 	for (let i = 0; i < arr.length; i++) {
// 		newString = arr[i] + ' ' + newString;
// 	}
// 	return newString;
// };

// let reverseSentence = function (sentence) {
// 	let arr = sentence.split(" ");
//   	let finalArr = [];

//   	for (let i = 0; i < arr.length; i++) {
//     	let currWord = arr[i]
//         finalArr.unshift(currWord)
//     }

//   	return finalArr.join(" ")
// }

// let reverseSentence = function (sentence) {
// 	let arr = sentence.split(" ");
//   	let finalArr = [];

//   	for (let i = arr.length - 1; i >= 0; i--) {
//     	let currWord = arr[i]
//         finalArr.push(currWord)
//     }

//   	return finalArr.join(" ")
// }

// let reverseSentence = function (sentence) {
// 	return sentence.split(" ").reverse().join(" ")
//   	// arr.reverse()
//   	// return arr.join(" ")
// }

//! Initials
// let initials = function (name) {
// 	let arr = name.split(" ");
//   	let finalStr = "";

//   	for (let i = 0; i < arr.length; i++) {
//       	let currentName = arr[i]
// 		finalStr += currentName[0].toUpperCase()
//     }

//   	return finalStr
// }

//! Popper
// let popper = function (array, num) {

// 	let finalArr = [];

// 	for (let i = 0; i < num; i++) {
// 		let popped = array.pop()
//         finalArr.push(popped)
// 	}

//   	return finalArr
// }

//! Choose Primes
// let isPrime = function (number) {
// 	// if number === 1, return false // if number === 0, return false
// 	if (number < 2) return false

// 	// if number === 2, return true
// 	if (number === 2) return true

// 	// all even numbers are NOT prime
// 	if (number % 2 === 0) return false

// 	// loop through every number up to passed in number
// 	for (let i = 2; i < number; i++) {
// 		// if number % i === 0 return false
// 		if (number % i === 0) return false
// 	}

// 	return true
// }

// let choosePrimes = function (nums) {
// let finalArr = [];

// // loop over the nums array
// 	for (let i = 0; i < nums.length; i++) {
// 			let currentNumber = nums[i]
// 		// check if each number is prime
// 			if (isPrime(currentNumber)) {
// 			// if yes prime
// 		finalArr.push(currentNumber)
// 			}
// 	}
// return finalArr
// }

//! Longest Word
// let longestWord = function (sentence) {
// 	let currentLongestWord = "";

// // split my sentence into an array of words
// 	let arr = sentence.split(" ")

// 	// loop over that array
// 	for (let i = 0; i < arr.length; i++) {
// 			let currWord = arr[i]
// 		// check if newWord.length > curLonWor.length
// 			if(currWord.length > currentLongestWord.length) {
// 			// if yes, assign curLonWor = newWord
// 					currentLongestWord = currWord
// 			}
// 	}

// 	return currentLongestWord
// }

//! Abbreviate
// let abbreviate = function (word) {
// 	let vowels = 'aeiouAEIOU';
//     let finalArr = [];
//     let wordArr = word.split("");

//     for (let i = 0; i < wordArr.length; i++) {
//     	let currChar = wordArr[i]

//         if (!vowels.includes(currChar)) {
//         	finalArr.push(currChar)
//         }
//     }

//   	return finalArr.join("")
// }

// let abbreviate = function (word) {
// 	let vowels = 'aeiouAEIOU';
//     let finalStr = "";

//     for (let i = 0; i < word.length; i++) {
//     	let currChar = word[i]

//         if (!vowels.includes(currChar)) {
//         	finalStr += currChar
//         }
//     }

//   	return finalStr
// }
