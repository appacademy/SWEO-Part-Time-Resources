// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) { // time o(n log n)
						  // space o(n)

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
	if (arr.length <= 1) {
		return arr
   	}

  // Divide the array in half
  	let mid = Math.floor(arr.length / 2)

  // Recursively sort the left half
  	let leftHalf = mergeSort(arr.slice(0, mid))
  // Recursively sort the right half
  	let rightHalf = mergeSort(arr.slice(mid))

  // Merge the halves together and return
	return merge(leftHalf, rightHalf) // o(n^2)
}


// Takes in two sorted arrays and returns them merged into one
// function merge(arrA, arrB) { // space o(1)
// 							 // time o(n^2)

// 							 // time using pointers (n)
//   // Create an empty return array
//   let mergedArr = []
// 	// While there are still values in each array...
//   while(arrA.length && arrB.length ) { // time o(n)
// 	// Point to the first value of each array
// 	// Compare the first values of each array
// 	  if(arrA[0] < arrB[0]) {
// 		  //console.log('left[0]: ', left[0], 'right[0]: ', right[0])
// 		  // Move the pointer to the next value in that array
// 		  // Add the smaller value to the return array
// 		  mergedArr.push(arrA.shift()); // push time o(1), shift o(n)
// 	  } else {
// 		// Move the pointer to the next value in that array
// 		// Add the smaller value to the return array
// 		mergedArr.push(arrB.shift()); // push time o(1), shift o(n)
// 	  }
// 	 // i++;
//   }
//   // Return the return array
//   //      o(n)           o(n)      o(n)
//   return [...mergedArr, ...arrA, ...arrB];
// }

function merge(arrA, arrB) { // space o(1)
							// time o(n + n + n) --> o(n)

	// time using pointers (n)
	// Create an empty return array
	let mergedArr = []
	// Point to the first value of each array
	let indexA = 0
	let indexB = 0

	// While there are still values in each array...
	while(indexA < arrA.length && indexB < arrB.length ) { // time o(n)
	// Compare the first values of each array
		if(arrA[indexA] < arrB[indexB]) {
		// Move the pointer to the next value in that array
		// Add the smaller value to the return array
			mergedArr.push(arrA[indexA])
			indexA++
		} else {
		// Move the pointer to the next value in that array
		// Add the smaller value to the return array
			mergedArr.push(arrB[indexB])
			indexB++
		}
	}
												// o(n)    o(n)
	// if(indexA < arrA.length) mergedArr.push(...arrA.slice(indexA)) // o(n)
	// if(indexB < arrB.length) mergedArr.push(...arrB.slice(indexB)) // o(n)

	while(indexA < arrA.length){
		mergedArr.push(arrA[indexA])
		indexA++
	} // o(n)

	while(indexB < arrB.length){
		mergedArr.push(arrB[indexB])
		indexB++
	} // o(n)

	// Return the return array
	return mergedArr
}


// space o(n)
// time o(n log n + n^2) --> o(n^2)
// time with merge using pointers o(n log n + n) --> o(n log n)

module.exports = [merge, mergeSort];

// adjacency matrix
// const obj = {
// 	'0' : [1,4,6],
// 	'1' : [2,0,5],
// 	'2' : [4,6]
// }

// [
// 	[1,3],
// 	[2,3],
// 	[0,1],
// 	[2,1]
// ]
// [
// 	[0,0]
// 	[0,0]
// ]

// [
// 	[0,0,0]
// 	[0,0,0]
// 	[0,0,0]
// ]

// doubly ll
// prev, next

// matrix
// top, down, left, right
