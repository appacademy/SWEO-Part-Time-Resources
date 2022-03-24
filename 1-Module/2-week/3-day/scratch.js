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
// 	for (let i = 0; i < array.length; i++) {
//     if (hasE(array[i])) {
//       array.splice(i, 1);
//       i--;
//     }
//   }

// 	return array
// }

// let removeEWords = function (sentence) {
//   let arr = sentence.split(' ');

// 	let finalArr = loopAndSplice(arr)

// 	return finalArr.join(" ")
// };

// console.log(removeEWords('Hello World'));
// console.log(removeEWords('We are here to learn how to code'));

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

// let reverseSentence = function (sentence) {
// 	let arr = sentence.split(" ")
//     let finalArr = [];
// 	// start at the end of my array, iterate until i'm at zero
//     for (let i = arr.length - 1; i >= 0; i--) {
//       	let currWord = arr[i]
// 		finalArr.push(currWord)
//     }
//   return finalArr.join(" ")
// }

// let reverseSentence = function (sentence) {
// 	let arr = sentence.split(" ")
//     let finalArr = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       	let currWord = arr[i]
// 		finalArr.unshift(currWord)
//     }
//   return finalArr.join(" ")
// }


//! Two Sum
// let twoSum = function (arr, target) {
// 	// loop over my array
//   	for (let i = 0; i < arr.length; i++) {
//   		// start with one value
//       	let currNum = arr[i]
//         // console.log(currNum, i, "I")

//   		// loop over the rest of the array
//         for (let j = i + 1; j < arr.length; j++) {
// 			let nextNum = arr[j]
//             // console.log(nextNum, j, "J")
// 			console.log(nextNum + currNum)
//   			// add every number to that first value
//             if (currNum + nextNum === target) {
//               	// if === target return true
//             	return true 
//             } 
//         }
        
//     }	
//   	return false		
// }


//! Choose Primes

// let isPrime = function (number) {
// 	// check if a number is less than 2, not prime
//   	if (number < 2) return false
  
//   	// check if a number is NOT 2, but even, not prime
//   	if (number !== 2 && number % 2 === 0) return false
  
//   	// loop and modulo number by every number less than number
//   	for (let i = 2; i <= number / 2; i++) {
//   		// if number % i === 0 return false
//       	if (number % i === 0) return false
//     }
//   	// else return true
//   	return true
// }

// let choosePrimes = function (nums) {
//   	let finalArr = [];
//   	// iterate through my array
//   	for (let i = 0; i < nums.length; i++) {
//   		// check if each num is prime
//       	if (isPrime(nums[i])) {
//   			// if yes, push into new array
//           	finalArr.push(nums[i])
//         }
//     }
//   	return finalArr;
// }

//! Longest Word
// let longestWord = function (sentence) {
// 	let currLong = '';
//   	let arr = sentence.split(" ")
    
//     for (let i = 0; i < arr.length; i++) {
//       	let currentWord = arr[i] // where // did // everyone
//     	 		// where 5     > "" 0
//         		// did 3       >  where 5
//         		// everyone 8  >  where 5
//         		// go 2.       > everyone 8
//         if (currentWord.length > currLong.length) {
//         	currLong = currentWord
//          }
//     }
  
//   	return currLong
// }