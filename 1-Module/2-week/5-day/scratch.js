// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

// function costOfGroceries(groceries) {
//   let total = 0;

//   for (let i = 0; i < groceries.length; i++) {
//     let currFood = groceries[i];

//     if (currFood === 'butter') {
//       total += 1;
//     } else if (currFood === 'eggs') {
//       total += 2;
//     } else if (currFood === 'milk') {
//       total += 3;
//     } else if (currFood === 'bread') {
//       total += 4;
//     } else if (currFood === 'cheese') {
//       total += 5;
//     }
//   }

//   return total;
// }

// function mostExpensiveGroceries(groceriesList) {
//   let currMax = 0;
//   let maxIndex = 0;

//   for (let i = 0; i < groceriesList.length; i++) {
//     let currGroc = groceriesList[i];
//     let currPrice = costOfGroceries(currGroc);

//     if (currMax < currPrice) {
//       currMax = currPrice;
//       maxIndex = i;
//     }
//   }

//   return maxIndex;
// }

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// const groceriesA = ['cheese', 'butter', 'eggs'];
// const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
// const groceriesC = ['cheese', 'bread'];
// const groceriesD = ['eggs', 'butter'];

// costOfGroceries(groceriesA); // 8
// costOfGroceries(groceriesB); // 13
// costOfGroceries(groceriesC); // 9
// costOfGroceries(groceriesD); // 3

// mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

// let score = 0;

// if (costOfGroceries(groceriesA) === 8) score++;
// if (costOfGroceries(groceriesB) === 13) score++;
// if (costOfGroceries(groceriesC) === 9) score++;
// if (costOfGroceries(groceriesD) === 3) score++;

// if (
//   mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1
// )
//   score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

// console.log('You have scored ' + score + '/7 points.');

// function isSorted(nums) {

// 	// Loop through each number
// 	for (let i = 0 ; i < nums.length - 1 ; i++) {

// 			// check if next number is NOT bigger than last number
// 			if (nums[i + 1] < nums[i]) {
// 					// If it's not, return false
// 					return false;
// 			}
// 		// 		1   ===       1
// 		// if (i + 1 === nums[i + 1]) {
// 		//       // If it's not, return false
// 		//       return false;
// 		//   }
// 	}

// 	// If every number is greater or equal to the previous number
// 	// in the array, it's sorted.
// 	return true;

// }

// console.log(isSorted([1, 2, 3, 4, 5]))  // true
// console.log(isSorted([2, 2, 4, 4]))  // true
// console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false
// console.log(isSorted([0, 1, 4, 5, 6, 7]))  // true

// 1, 1, 2, 3, 5, 8, 13, 21, 34

// let fib = function (num) {
// 	// return 1 for num === 1 & 2
// 	if (num === 1 || num === 2) {
// 		return 1
// 	}

// 	// build a fib array that hold all numbers in the fib sequence, up to num
// 	let fibArr = [1, 1]

// 	for (let i = 1; i < num - 1; i++) {
// 		// add the current number to the previous number
// 		let currNum = fibArr[i]
// 		let prevNum = fibArr[i - 1]

// 		// push the sum into the fib array
// 		fibArr.push(currNum + prevNum)
// 	}

// 	return fibArr.pop()
// 	// return fibArr[fibArr.length - 1]

// }

// console.log(fib(1));    // 1
// console.log(fib(2));    // 1
// console.log(fib(3));    // 2
// console.log(fib(4));    // 3
// console.log(fib(5));    // 5
// console.log(fib(6));    // 8
// console.log(fib(10));   // 55
// console.log(fib(11));   // 89
// console.log(fib(12));   // 144

// let doubleSequence = function (base, length) {
//   // if length is 0, return empty
//   if (length === 0) {
//     return [];
//   }

//   // start array with base (only number not being doubled)
//   let finalArr = [base];

//   //  [7 , 14, 28]
//   for (let i = 0; i < length - 1; i++) {
//     // grab last number in array
//     let currNum = finalArr[i];
//     // double number
//     currNum *= 2;
//     // push into array
//     finalArr.push(currNum);
//   }

//   return finalArr;
// };

// let doubleSequence = function (base, length) {
//   // if length is 0, return empty
//   if (length === 0) {
//     return [];
//   }

//   let finalArr = [];

//   //  [7 , 14, 28]
//   for (let i = 1; i < length; i++) {
//     if (finalArr.length === 0) {
//       finalArr.push(base);
//     } else {
//       let currNum = finalArr[finalArr.length - 1];
//       finalArr.push(currNum * 2);
//     }
//   }

//   return finalArr;
// };

// console.log(doubleSequence(7, 3)); // [7, 14, 28]
// console.log(doubleSequence(3, 5)); // [3, 6, 12, 24, 48]
// console.log(doubleSequence(5, 3)); // [5, 10, 20]
// console.log(doubleSequence(5, 4)); // [5, 10, 20, 40]
// console.log(doubleSequence(5, 0)); // [ ]

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

// let endNonVowel = function(word) {
// 	let vowels = 'aeiouAEIOU';

// 	for (let i = word.length - 1; i >= 0; i--) {
// 		let char = word[i]
// 		if (vowels.includes(char)) {
// 			return word + word.slice(i)
// 		}
// 	}
// }

// arr[i]

// console.log(endNonVowel("Apples"))
// console.log(endNonVowel("Melonlmp"))

// let repeatingTranslate = function (sentence) {
//   let arr = sentence.split(' ');
//   let vowels = 'aeiouAEIOU';

//   let finalArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     // - words that are shorter than 3 characters are unchanged
//     if (word.length < 3) {
//       finalArr.push(word);
//     } else {
//       if (vowels.includes(word[word.length - 1])) {
//         finalArr.push(word + word);
//       } else {
// 				finalArr.push(endNonVowel(word))
//       }
//     }
//   }

//   return finalArr;
// };

// console.log(repeatingTranslate('we like to go running fast')); // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
