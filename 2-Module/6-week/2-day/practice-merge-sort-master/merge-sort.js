// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) { // log n

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
	if(arr.length <= 1) return

  // Divide the array in half
	var middle = Math.floor(arr.length / 2);
	var leftHalf = arr.slice(0, middle);
	var rightHalf = arr.slice(middle);

  // Recursively sort the left half
	mergeSort(leftHalf)
  // Recursively sort the right half
	mergeSort(rightHalf)

  // Merge the halves together and return
	return merge(leftHalf, rightHalf)
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) { // o(n)

  // Create an empty return array
  	var sorted = []

  // Point to the first value of each array
  	// var p1 = arrA[0];
	// var p2 = arrB[0];
	var p1Index = 0
	var p2Index = 0

  // While there are still values in each array...
  while(p1Index < arrA.length && p2Index < arrB.length){
	  // Compare the first values of each array
		if(arrA[p1Index] > arrB[p2Index]){
			// Add the smaller value to the return array
			sorted.push(arrB[p2Index])
			// Move the pointer to the next value in that array
			p2Index++
		} else {
			// Add the smaller value to the return array
			sorted.push(arrA[p1Index])
			// Move the pointer to the next value in that array
			p1Index++
		}
  }

  while(p1Index < arrA.length){ // 0(n)
	sorted.push(arrA[p1Index]) // 0(1)
	p1Index++
  }

  while(p2Index < arrB.length){ // 0(n)
	sorted.push(arrB[p2Index]) // 0(1)
	p2Index++
  }

//   let remainderA = arrA.slice(p1Index)
//   let remainderB = arrB.slice(p2Index)
//   if(p1Index < arrA.length) sorted.concat(arrA.slice(p1Index)) // 0(n), // 0(n)
//   if(p2Index < arrB.length) sorted.concat(arrA.slice(p1Index)) // 0(n), // 0(n)

  // Return the return array
//   return sorted.concat(remainderA, remainderB)
  return sorted
  			// o(n)      // o(n), o(n)          // o(n), o(n)
//   return [...newArr, ...arrA.slice(aIndex), ...arrB.slice(bIndex)]
}

// space o(n)
// time

module.exports = [merge, mergeSort];
