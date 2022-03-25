// let uncompress = function (str) {
// 	let finalStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       // chars are at even indecies
//       let char = str[i];
//       // nums are at odd indecies
//       let num = str[i + 1];

// 			finalStr += char.repeat(num)
//     }
//   }

// 	return finalStr
// };

// let uncompress = function (str) {
//   let finalStr = '';

//   for (let i = 0; i < str.length; i += 2) {
//     let char = str[i];
//     let num = str[i + 1];

//     for (let j = 0; j < num; j++) {
//       finalStr += char;
//     }
//   }

//   return finalStr;
// };

// let uncompress = function (str) {
// 	let finalStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       // chars are at even indecies
//       let char = str[i];
//       // nums are at odd indecies
//       let num = str[i + 1];

// 			for (let j = 0; j < num; j++) {
// 				finalStr += char
// 			}
//     }
//   }

// 	return finalStr
// };

// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

// let removeLastVowel = function (word) {
//   let vowels = 'aeiouAEIOU';

//   for (let i = word.length - 1; i >= 0; i--) {
//     let char = word[i];
//     if (vowels.includes(char)) {
//       return word.slice(0, i) + word.slice(i + 1);
//     }
//   }
// };

// console.log(removeLastVowel('When')); // Whn
// console.log(removeLastVowel('Apple')); // Appl
// console.log(removeLastVowel('bootcamp')); // bootcmp

// let hipsterfy = function (sent) {
//   let arr = sent.split(' ');
// 	// let finalArr = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		let currentWord = arr[i]
// 		// finalArr.push(removeLastVowel(currentWord))
// arr[i] = removeLastVowel(currentWord)
// 	}

// 	return arr.join(" ")
// 	// return finalArr.join(" ")
// };

// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// let arr = [1, 2, 100, 4, 5];

// console.log(arr)
// let wrongNumber = arr[2];
// console.log(wrongNumber)
// wrongNumber = 3
// console.log(wrongNumber)
// console.log(arr)

// console.log(arr)
// arr[2] = 3;
// console.log(arr)

// let rotate = function (array, num) {
//   if (num > 0) {
//     for (let i = 0; i < num; i++) {
//       let myVal = arr.pop();
//       array.unshift(myVal);
//     }
//   } else {
//     // num *= -1
//     //  i < num
//     for (let i = 0; i < -num; i++) {
//       let myVal = array.shift();
//       array.push(myVal);
//     }
//   }

//   return array;
// };

// let rotate = function (array, num) {

// 	for (let i = 0; i < Math.abs(num); i++) {
// 		if (num > 0) {
// 			let myVal = arr.pop();
//       array.unshift(myVal);
// 		} else {
// 			let myVal = array.shift();
//       array.push(myVal);
// 		}
// 	}
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

// let arr = ["hello", "hi", "yes"]
// for (let i =0; i < arr.length; i++) {
// 	console.log(arr[i])
// 	for (let j = 0; j < arr[i].length; j++) {
// 		console.log(arr[j][i])
// 	}
// }

// function maxColumn(matrix) {
//   let height = matrix.length;
//   let width = matrix[0].length;

//   let finalArr = [];

//   for (let i = 0; i < width; i++) {
//     let max = 0;
//     for (let j = 0; j < height; j++) {
// 			console.log(matrix[j][i])
//       if (max < matrix[j][i]) {
//         max = matrix[j][i];
//       }
//     }
// 		console.log("-------------------")
//     finalArr.push(max);
//   }
//   return finalArr;
// }

// matrix = [
//   [5, 9, 21],
//   [9, 19, 6],
//   [12, 14, 15],
// ];

// maxColumn(matrix);
