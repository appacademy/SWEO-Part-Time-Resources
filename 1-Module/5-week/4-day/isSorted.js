/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.
***********************************************************************/


function isSorted(arr) {
	if (arr.length === 1) return true
	if (arr[0] > arr[1]) return false
	
	return isSorted(arr.shift())
}


console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false
