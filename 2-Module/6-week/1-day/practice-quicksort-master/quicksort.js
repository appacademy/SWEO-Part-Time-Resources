function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr

  // Pick the first value as the pivot
  let pivot = arr[0]
  //console.log(`pivot is:`, pivot)

  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  let leftArr = []
  let rightArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) leftArr.push(arr[i])
    if (arr[i] > pivot) rightArr.push(arr[i])
  }
  // console.log(`leftArr:`, leftArr)
  // console.log(`rightArr:`, rightArr)

  // Recursively sort the left
  let sortedLeftArr = quicksort(leftArr)
  // Recursively sort the right
  let sortedRightArr = quicksort(rightArr)

  // Return the left, pivot and right in sorted order
  return sortedLeftArr.concat(pivot, sortedRightArr)
}

// space o(n)
// worst time (n^2)
// average case o(n log n)

// function quicksort(arr, left = 0, right = arr.length - 1) {
// 	if (left < right) {
// 	  let pivotIndex = partition(arr, left, right);
// 	  quicksort(arr, left, pivotIndex - 1);
// 	  quicksort(arr, pivotIndex + 1, right);
// 	}
// 	return arr;
// }

// function partition(arr, left, right) {
// 	let pivotIndex = Math.floor((left + right) / 2);
// 	let pivotValue = arr[pivotIndex];
// 	swap(arr, pivotIndex, right);
// 	let storeIndex = left;
// 	for (let i = left; i < right; i++) {
// 	  if (arr[i] < pivotValue) {
// 		swap(arr, i, storeIndex);
// 		storeIndex++;
// 	  }
// 	}
// 	swap(arr, storeIndex, right);
// 	return storeIndex;
// }

// function swap(arr, index1, index2) {
// 	let temp = arr[index1];
// 	arr[index1] = arr[index2];
// 	arr[index2] = temp;
// }

// [5,2,1,4,6]
// pi = index 2 = 1
// [2,5,1,4,6]

// left pi = index 1 = 5
// [2,5,1,4,6]

// right pi = index 3 = 4
// [1,2,5,4,6]

// left pi = index 0 = 1
// [1,2,4,5,6]

module.exports = [quicksort];
