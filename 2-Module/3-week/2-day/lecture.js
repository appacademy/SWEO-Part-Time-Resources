// Time complexity and Big-O

// Not only can we time our code,
// but we can also read our code.
// we can determine the growth.

// we call this complexity analysis and we express it through big - O analysis

// three types of growth:
// constant time/space
// linear time/space
// quadratic time/space

// Big - O
// describes how long it takes for code to run

// Constant time: o(1)
// Best time complexity, based on the input the values are not growing relative to
// the size of the input
// It will always take the same amount of time to run regardless of the data/input size

// example
let num = 1
num++ // constant o(1) time/space

const arr = [1,2,3,4]
arr.pop() // constant o(1) time/space


// Linear time: o(n)
// Linear time grows equally in comparison to the amount of data being added or being used
// Example: using a for loop through an array
// as the array grows in size so does the time it takes to iterate through the loop

//examples
const arr2 = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i < arr.length; i++){
	// console.log(arr[i])
} // linear time o(n), constant space o(1), n = number of elements of array

const newArr = arr2.map((arr)=> arr * 2)
// linear time o(n), linear space o(n)

arr2.forEach((ele, index)=> arr2[index] *= 2)
// linear time o(n), constant space o(1)

// console.log(arr2)
// console.log('newArr =', newArr.length,'arr2 =', arr2.length)


// const newArr2 = arr2.map((arr)=> arr * 2)
// const newArr3 = arr2.map((arr)=> arr * 2)
// const newArr4 = arr2.map((arr)=> arr * 2)

// big O
// time o(n + n + n), space o(n + n + n)
// linear time o(n), linear space o(n)


// Qudratic time : o(n^2)
// not ideal to have this sort of time complexity
// it can start out fast, but as the data grows it'll significantly slow down
// This type of complexity is pretty common with nested types of data
// Example are nested loops:

// graphs

const graph = [
			   [1,2,3],
			   [4,5,6],
			   [7,8,9],
			   [10,11,12],
			  ]

for(let row = 0; row < graph.length; row++){
	const currentRow = graph[row]
	for(let column = 0; column < currentRow.length; column++){
		console.log(currentRow[column])
	}
} // quadratic time o(n^2), constant space o(1)


// Best case - Big Omega
// Worst Case - Big-O
// Average Case - Big Theta


// const testArr = [1,0,0,0,0,0] // best case
// const testArr2 = [0,0,0,0,0,1] // worst case
// const testArr3 = [0,0,1,0,0,0] // average case

for(let i = 0; i < testArr.length; i++){
	if(testArr[i] === 1){
		break
	}
}

// the average case would be if that the target is halfway
// the best case would be if the target is at the very first instance

// Best case - Big Omega
// Worst Case - Big-O
// Average Case - Big Theta


// two sum
// given an input find if the given array sums up to the input

// always valid arrays
// non repeat values
// non negative numbers

// example:
// [1,4,6,3,10], 9 // true
// [1,2,3], 5 // true


function twoSum(array, input){
	for(let i = 0; i < array.length; i++){ // time o(n^2), space o(1)
		const currentNumber = array[i]
		for(let x = i + 1; x < array.length - 1; x++){
			if(currentNumber + array[x] == input){
				return true
			}
		}
	}
	return false
}

function twoSum(array, input){
	const complement = {} // space o(n)
	for(let i = 0; i < array.length; i++){ // time o(n)
		const currentNumber = array[i]
		if (complement[currentNumber]) return true
		else {
			complement[abs(input - currentNumber)] = currentNumber
		}
	}
	return false
}

// complement = {8, 5, 3}

// [1,4,6,3,10], 9
// 1, 4, 6
// 4, 6 , 3, 10, 6, 3, 10, 3

//
