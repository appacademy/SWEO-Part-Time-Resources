

function selectionSort(arr) {

  // Copy the original array
  let copy = [...arr]
  // Create an array to store the sorted values
  let sorted = []

  // While the array is not empty...
	while(copy.length){
		// Do not move this console.log
		console.log(sorted.join(","));
		// Find the index of the minimum value in the unsorted half
		let minIndex = 0
		for(let i = 1; i < copy.length; i++){
			if(copy[i] < copy[minIndex]){
				// Save and remove the value at the min index
				minIndex = i
			}
		}
		// Add the min value to the end of the sorted array
		sorted.push(copy[minIndex]) // o(n)
		copy.splice(minIndex, 1) // o(n)
	}
	return sorted
}

// space o(n)
// time o(n^2)



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  var divider = 0;
  // Repeat while the unsorted half is not empty:
  while(divider < arr.length){
	var min = divider
	console.log(arr.join(","));
	for(let i = divider + 1; i < arr.length; i++){
		var current = arr[i]
		if(current < arr[min]){
			min = i
		}
	}
	var minValue = arr[divider]
	arr[divider] = arr[min]
	arr[min] = minValue
	divider++
  }
  return arr
}


module.exports = [selectionSort, selectionSortInPlace];
