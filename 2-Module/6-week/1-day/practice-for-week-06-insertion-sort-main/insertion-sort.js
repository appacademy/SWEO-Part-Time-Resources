// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  const copy = [...arr]
  let sortedArr = []

  while(copy.length) {
	console.log(sortedArr.join(','))
	let removed = copy.pop() // new value

	sortedArr.push(null);

	let index = 0

	for(let i = sortedArr.length - 1; i >= 0; i--){
		index = i
		if(sortedArr[i - 1] < removed){
			break;
		} else {
			sortedArr[i] = sortedArr[i - 1]
		}
	}

	sortedArr[index] = removed
  }
  return sortedArr
}

// space o(n)
// time o(n^2)

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let divider = 1;
  while(divider < arr.length){
	console.log(arr.join(','))

	let unsortedVal = arr[divider]

	let index = divider
	// while(index > 0){
	// 	if(arr[index - 1] > unsortedVal){
	// 		arr[index] = arr[index - 1] // swap
	// 		index--;
	// 	} else {
	// 		break;
	// 	}
	// 	// if(arr[index - 1] < unsortedVal){
	// 	// 	break;
	// 	// }
	// 	// arr[index] = arr[index - 1] // swap
	// 	// index--;
	// }

	while (index > 0 && arr[index - 1] > unsortedVal) {
		arr[index] = arr[index - 1];
		index--;
	}

	arr[index] = unsortedVal
	divider++
  }

  return arr
}

// space o(1)
// time o(n^2)

// [3,		1		,2]
// 		divider
module.exports = [insertionSort, insertionSortInPlace];
