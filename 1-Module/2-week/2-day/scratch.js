// function accepts a string
// iterate over that string
// find any consonants and remove them
// Array.splice()
// return string

// let removeCons = function(str) {

//   let vowels = "AEIOUaeiou ";
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {

//     if (vowels.includes(str[i])) {

//       arr.push(str[i]);
//     }
//   }
//   return arr.join("");
// }

// let removeCons = function (str) {
//   let vowels = 'AEIOUaeiou ';
//   let strArr = str.split('');

//   for (let i = 0; i < strArr.length; i++) {
//     let currChar = strArr[i];

//     if (!vowels.includes(currChar)) {
//       strArr.splice(i, 1);
// 			i--
//     }
//   }
//   return strArr.join('');
// };

// console.log(removeCons('keyboard')); // eoa
// console.log(removeCons('avocado')) // aoao
// console.log(removeCons('myrmecophilous')) // eoiou
// console.log(removeCons('happy birthday')) // a ia

// let arr = [[1, 2], [3, 4]]

// let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let subArr = arr[i];

//         for (let j = 0; j < subArr.length; j++) {
//             result += subArr[j];
//         }
//     }

// console.log(result)

// let removeEWords = function (sentence) {
// 	let finalArr = []

//     let wordArr = sentence.split(" ")

//     for (let i = 0; i < wordArr.length; i++) {
//       	let currentWord = wordArr[i]

//     	// if (!currentWord.includes('e') && !currentWord.includes('E')) {
//     	// finalArr.push(currentWord)
//     	// }
//         if (!currentWord.toLowerCase().includes('e')) {
//         	finalArr.push(currentWord)
//         }
//     }

//     return finalArr.join(" ")
// }

// let maxValue = function (nums) {
// 	if (nums.length === 0) {
//     	return null
//     }

//   	// let currMax = -Infinity;
//   	let currMax = nums[0]

//   	for (let i = 0; i < nums.length; i++) {
//     	 if (nums[i] > currMax) {
//         	currMax = nums[i]
//          }
//     }
//   return currMax
// }
