// Insertion Sort out-of-place
// Do not modify the original array
// function insertionSort(arr) {
//   /*
//   Pseudocode:

//   - Check if the value to the left is smaller than the new value
//   - If so, you've reached the insertion point so exit the loop
//   - If not shift the value to the right by 1 and continue
//   - Insert the unsorted value at the break point
//   Return the sorted array
//   */

//   // Your code here

//   // Copy the original array
//   let temp = arr.slice();

//   // Create an array to store the sorted values
//   let sorted = [];

//   // While the array is not empty:
//   while(temp.length){
// 	//  make sure you have a console.log(sorted.join(',')) as your first line in the while loop
//     console.log(sorted.join(','));
// 	// Pop a value from the array
//     let value = temp.pop();

// 	// Create a new spot at the end of the array with null to help with comparisons
// 	sorted.push(null)

//     let index = 0;
// 	// Walk through the sorted array in reverse order

//   }
//   return sorted;
// }

function insertionSort(arr) {
	// Copy the original array
	let arrCopy = arr.slice();
	// Create an array to store the sorted values
	let sorted = [];
	// While the array is not empty:
	while (arrCopy.length > 0) {
	  console.log(sorted.join(","));
	  // Pop a value from the array (reassign to a variable to insert later?)
	  let valueToInsert = arrCopy.pop();
	  // Create a new spot at the end of the array with null to help with comparisons
	  sorted.push(null);
	  // Walk through the sorted array in reverse order
	  for (let i = sorted.length - 1; i >= 0; i--) {
		// Check if the value to the left is smaller than the new value
		// If so, you've reached the insertion point so INSERT THE VALUE THEN exit the loop
		// we need OR i === 0 in the conditional here because we need to insert the value
		// if we have reached the far left of the array (index 0) and haven't found a value smaller yet!

		if (sorted[i - 1] < valueToInsert || i === 0) {
		  sorted[i] = valueToInsert;
		  break;
		}
		// If not shift the value to the right by 1 and continue
		else sorted[i] = sorted[i - 1];
	  }
	}
	return sorted;
}

// space o(n)
// time o(n^2)

// In-place Insertion Sort
// Mutates the original array
// function insertionSortInPlace(arr) {

//   //Pseudocode:
//
//
//
//
//
//
//

//   // Your code here
// }

// pointer = 1

function insertionSortInPlace(arr) {
	// Set a pointer dividing the array into sorted and unsorted halves
	// Repeat while the unsorted half is not empty:
	//- Increment the dividing pointer and repeat
	for (let i = 1; i < arr.length; i++) {
	//- make sure you have a console.log(sorted.join(',')) as your first line in the while loop
	  console.log(arr.join(','));
	  //- Grab the first value from the unsorted half
	  const temp = arr[i]; // 1

	  let j = i - 1; // 0
	  //- For each value starting from the divider,
	  //- Check if the value to the left is smaller than the unsorted value
	  while (j >= 0 && arr[j] > temp) {
		arr[j + 1] = arr[j];
		//- If not shift the value to the right by 1 and continue
		j--;
	  }
	  //- If so, you've reached the insertion point so exit the loop
	  //- Insert the unsorted value at the break point
	  arr[j + 1] = temp;
	}
	//Return the mutated array
	return arr
}

// space o(1)
// time o(n^2)

module.exports = [insertionSort, insertionSortInPlace];
