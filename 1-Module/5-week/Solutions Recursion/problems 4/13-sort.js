/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
	// base case
	if(nums.length === 0) return sorted

	let minIndex = 0;

	for(let i = 0; i < nums.length; i++){
		let element = nums[i]
		if(element <= nums[minIndex]){
			minIndex = i
		}
	}

	// add element to the end of sorted
	sorted.push(nums[minIndex]) // we want the value

	nums = sliceArray(nums, minIndex) // we are removing the smallest element

	// recursively sort
	return sort(nums, sorted)
}

function sliceArray(arr, index){
	return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

function sort2(nums, sorted = []){
	// base case
	if(nums.length === 0){
		return sorted
	}

	// we get the minimum index of the minimum element in the array
	let index = nums.indexOf(Math.min(...nums));

	// add the minimum value into sorted
	sorted.push(Math.min(...nums));

	// we're removing the minimum element that we found from the array
	// mutating the orignal array
	nums.splice(index, 1);

	return sort2(nums, sorted);
}



console.log(sort2([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort2([0, 1, -3])); // [-3, 0, 1]
console.log(sort2([])); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
