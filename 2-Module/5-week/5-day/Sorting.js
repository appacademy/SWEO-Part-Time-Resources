// Bubble Sort
function bubbleSort(arr) {
	while (true) {
		let swap = false
		for (let i = 0; i < arr.length - 1; i++) {
			let curr = arr[i]
			let next = arr[i + 1]
			if (curr > next) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
				// let temp = arr[i]
				// arr[i] = arr[i + 1]
				// arr[i + 1] = temp
				swap = true
				console.log(arr.join(","));
			}
		}
		if (!swap) return
	}
}


// Insertion copy
function insertionSort(arr) {
	arrCopy = [...arr];
	const sorted = [];

	while (arrCopy.length > 0) {
		console.log(sorted.join(","));
		let val = arrCopy.pop();
		sorted.push(null);

		let i = sorted.length - 1;
		while (i > 0) {
			if (sorted[i - 1] < val) break;
			else {
				sorted[i] = sorted[i - 1];
				i--;
			}
		}
		sorted[i] = val;
	}
	return sorted;
}

// Insertion in-place
function insertionSortInPlace(arr) {
	let divider = 1;

	while (divider < arr.length) {
		console.log(arr.join(","));
		let val = arr[divider];

		let i = divider;
		while (i > 0) {
			if (arr[i - 1] < val) break;
			else {
				arr[i] = arr[i - 1];
				i--;
			}
		}
		arr[i] = val;
		divider++;
	}
	return arr;
}

// Selection
function selectionSort(arr) {
	arrCopy = [...arr];
	const sorted = [];

	while (arrCopy.length > 0) {
		console.log(sorted.join(","));

		// Find the index of the minimum value in the unsorted half
		let minIndex = 0;
		for (let i = 1; i < arrCopy.length; i++) {
			if (arrCopy[i] < arrCopy[minIndex]) {
				minIndex = i;
			}
		}

		// Save and remove the value at the min index
		let minValue = arrCopy.splice(minIndex, 1)[0]; // splice returns an array, so [0] keys into it for just returning the value

		// Add the min value to the end of the sorted array
		sorted.push(minValue)
	}

	return sorted;
}



function selectionSortInPlace(arr) {
	// Set a pointer at zero dividing the array into sorted and unsorted halves
	let divider = 0;
	// Repeat while the unsorted half is not empty:
	while (divider < arr.length) {
		console.log(arr.join(","));
		// Find the index of the minimum value in the unsorted half
		let minIndex = divider;
		for (let i = divider + 1; i < arr.length; i++) {
			if (arr[i] < arr[minIndex]) {
				minIndex = i;
			}
		}
		// Save the min value
		let minValue = arr[minIndex];
		// Shift every unsorted value to the left of the min value to the right by 1
		for (let i = minIndex; i >= divider; i--) {
			arr[i] = arr[i - 1];
		}
		// Put the min value at the divider
		arr[divider] = minValue;
		// Increment the divider and repeat
		divider++;
	}
	return arr;
}


// quicksort

function quicksort(arr) {
	// Check if the input is length 1 or less
	if (arr.length <= 1) {
		// If so, it's already sorted: return
		return arr;
	}

	let pivot = arr[0]
	let left = []
	let right = []
	for (let i = 1 ; i < arr.length ; i++) {
		if (arr[i] < pivot) left.push(arr[i])
		else right.push(arr[i])
	}

	let leftSort = quicksort(left)
	let rightSort = quicksort(right)
	return [...leftSort, pivot, ...rightSort]
}

// Mergesort
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  // Recursively sort the left half
  const leftSorted = mergeSort(left);
  // Recursively sort the right half
  const rightSorted = mergeSort(right);

  // Merge the halves together and return
  return merge(leftSorted, rightSorted);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
 // Create an empty return array
  const returnArray = [];

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while (indexA < arrA.length || indexB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (indexA === arrA.length) {
      returnArray.push(arrB[indexB]);
      indexB++;
    } else if (indexB === arrB.length) {
      returnArray.push(arrA[indexA]);
      indexA++;
    } else if (arrA[indexA] < arrB[indexB]) {
      returnArray.push(arrA[indexA]);
      indexA++;
    } else {
      returnArray.push(arrB[indexB]);
      indexB++;
    }
  }

  // Return the return array
  return returnArray;
}

