// function accepts a string
// iterate over that string
// find any consonants and remove them
// use Array.splice()
// return the string

// let removeCons = function (str) {
//   let consonants = 'bcdfghjklmnpqrstvwxyz';
//   let strArr = str.split('');

//   for (let i = 0; i <= strArr.length; i++) {
//     if (consonants.includes(strArr[i])) {
//       strArr.splice(i, 1);
//       i--;
//     }
//   }
//   return strArr.join('');
// };

// let removeCons = function (str) {
//   let vowels = 'aeiou ';
//   let strArr = str.split('');

//   for (let i = 0; i < strArr.length; i++) {
//     if (!vowels.includes(strArr[i])) {
//       strArr.splice(i, 1);
//       i--;
//     }
//   }
//   return strArr.join('');
// };

// let removeCons = function (str) {
//   let vowels = 'aeiou ';
//   let finalArr = [];

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       finalArr.push(str[i]);
//     }
//   }
// 	console.log(finalArr, "This is our last array!")
//   return finalArr.join('');
// };

// console.log(removeCons('keyboard')); // eoa
// console.log(removeCons('avocado')); // aoao
// console.log(removeCons('myrmecophilous')); // eoiou
// console.log(removeCons('happy birthday')); // a ia

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


