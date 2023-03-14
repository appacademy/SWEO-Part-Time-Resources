// question twoSum
// given an array of numbers
// find if two numbers add up too the input
// return an array of the indices

// input:
// arr = an array of positive integers
// sum = an integer

// constraints/edge cases:
// never an empty array
// there will always be combinations that add up to the sum
// there will be no repeat numbers
// the numbers are in sorted order


function twoSum(arr, sum){
	for(let i = 0; i < arr.length; i++){ // time o(n)
		for(let j = 1; j < arr.length - 1; j++){ // time o(n - 1) --> o(n)
			if(arr[i] + arr[j] === sum) return [i, j]
		}
	}
}

// time o(n ^ 2)
// space o(1)

function twoSum(arr, sum){
	const complement = {}
	for(let i = 0; i < arr.length; i++){
		const currentNumber = arr[i]
		if (complement[currentNumber]) return [complement[currentNumber], i]
		else {
			complement[abs(sum - currentNumber)] = i
		}
	}
}

// time o(n)
// space o(n)


// pointers
function twoSum(arr, sum){
	let left = 0;
	let right = arr.length - 1;

	for(let i = 0; i < arr.length; i++){
		if(abs(arr[left] - arr[right]) === sum) return [left, right]
		else if (abs(arr[left] - arr[right]) < sum) left++
		else right--
	}
}

// [1,2,3,6,9] 12
//

// time o(n)
// space o(1)


// threeSum --> medium
// fourSum --> hard
