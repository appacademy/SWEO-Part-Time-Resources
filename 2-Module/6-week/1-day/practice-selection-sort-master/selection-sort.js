

function selectionSort(arr) {
	// Copy the original array
	const copyArr = arr.slice();
	// Create an array to store the sorted values
	const sorted = [];
	// While the array is not empty...
	while (copyArr.length) {
	  console.log(sorted.join(","));
	  if (copyArr.length === 1) {
		sorted.push(copyArr.pop());
	  } else {
		// Find the index of the minimum value in the unsorted half
		let minVal = Math.min(...copyArr); // time o(n)
		// Save and remove the value at the min index
		let minIndex = copyArr.indexOf(minVal); // time o(n)
		copyArr.splice(minIndex, 1); // time o(n)
		// Add the min value to the end of the sorted array
		sorted.push(minVal);
	  }
	}
	return sorted;
  }

// space o(n)
// time o(n * (n + n + n)) -> o(n^2)


// function selectionSortInPlace(arr) {

//   // Set a pointer at zero diving the array into sorted and unsorted halves

//   // Repeat while the unsorted half is not empty:

//     // Do not move this console.log
//     console.log(arr.join(","));

//     // Find the index of the minimum value in the unsorted half

//     // Save the min value

//     // Shift every unsorted value to the left of the min value to the right by 1

//     // Put the min value at the divider

//     // Increment the divider and repeat

// }


function selectionSortInPlace() {
    let swapped = true;
    let counter = 0;
    let min = 0;

    while(swapped) {
        swapped = false;

        for(let i = 1; i < arr.length - 1; i++) {
            counter ++;
            if(arr[i-1] > arr[i]) {

                [arr[i-1], arr[i]] = [arr[i], arr[i-1]]; // destructuring
                min++
                swapped = true;
            }

        }
    }
	
    console.log("Counter: ", counter)
    return arr;
}

// space o(1)
// time o(n^2)

module.exports = [selectionSort, selectionSortInPlace];
