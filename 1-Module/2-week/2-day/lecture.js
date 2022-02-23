// let removeConsonants = function(str){
// 	let vowels = 'aeiouAEIOU ';
// 	let result = '';
// 	let chars = str.split('');

// 	for(let i = 0; i < chars.length; i++){
// 		if(vowels.includes(chars[i])){
// 			result += chars[i]
// 		}
// 	}

// 	return result
// }

let removeConsonantsUsingSplice = function(str){
	let vowels = 'aeiouAEIOU ';
	let chars = str.split(''); // str = ['t','h','e',' ','b','r','o','w','n',' ','f','o','x']

	// let chars = str.split(); ['the quick brown fox']

	// chars = ['t','h','e',' ','b','r','o','w','n',' ','f','o','x'] initial step
	// ['h','e',' ','b','r','o','w','n',' ','f','o','x'] // second step
	// ['e',' ','b','r','o','w','n',' ','f','o','x'] // third step
	// ['e',' ','b','r','o','w','n',' ','f','o','x'] // fourth step

	// ['e',' ','r','o','w','n',' ','f','o','x'] // seventh step

	// array length = 13
	// array length = 12

	for(let i = 0; i < chars.length; i++){
		if(!vowels.includes(chars[i])){
			chars.splice(i, 1); //
			i--;
		}
	}

	return chars.join(''); // combines the array by characters returns as a string
}
console.log(removeConsonantsUsingSplice('the quick brown fox'))
console.log(removeConsonantsUsingSplice('immutable data types'))


// ROTATE RIGHT -------------------------

// your code here
// let rotateRight = function(array, num){
// 	let index = array.length - num // 3
//     // slice is inclusive first paramater, exclusive second paramater
//     let front = array.slice(0, index) // a, b, c
//     let back = array.slice(index) // d, e
//     return back.concat(front) // [d, e, a, b, c]
// };

// this one mutates the original array
// let rotateRight = function(array, num){
//     for (let i = 0; i < array.length - num; i++){
//     	let currChar = array.shift() // starting from the front
//         array.push(currChar) // push back
//     }
//   	return array
// }

// let rotateRight = function(array, num) {
//     let copy = array.slice();

//     for (let i = 0; i < num; i++) {
//         let el = copy.pop(); // starting from back
//         copy.unshift(el); // unshifting to the front
//     }
//     return copy;
// };

// let rotateRight = function(array, num){
// 	console.log(array.slice(0,-num)) // starting from 0 and minus starting from the end
//   let newArray = array.slice(-num).concat(array.slice(0,-num));
//   return newArray;
// }



// TRIPLER --------------

// your code here
// let tripler = function(nums){
// 	let triple = [];
//   	for(let i = 0; i < nums.length; i++){
//     	triple.push(nums[i] * 3)
//     }
//   	console.log(nums, 'nums')
//   	return triple
// }

// let triplerMutated = function(nums){
//   	for(let i = 0; i < nums.length; i++){
//     	nums[i] *= 3
//     }
//   	console.log(nums, 'nums')
//   	return nums
// }

function tripler(nums){
	let trips;
  for (let i = 0;i < nums.length;i++){
		 trips = nums[i] * 3 // 6
		// return trips // when we reach this point we end the loop and return
						// when we reach a return it ends the function
	}
	return trips
}



console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
// console.log(triplerMutated([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(triplerMutated([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]


// Index

// your code here
let myIndexOf = function(arr, target){
	for(let i = 0; i < arr.length; i++){
    	if(target === arr[i]){
          return i
        }
    }
  	return -1 // default return value
}



console.log(['a', 'b', 'c', 'e'].indexOf('c')); // 2
console.log(['a', 'b', 'c', 'e'].indexOf('z')); // -1

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
