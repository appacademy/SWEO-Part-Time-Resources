// time complexity o(n)
function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);
	// for( let i = 0; i < arr.length; i++){
	// 	let char = arr[i]
	// 	if(char ===target){
	// 		return i
	// 	}
	// }
	// return -1
	// if(arr.includes(target)){ return target }else{return -1};

};

// let arr = [1, 4, 6, 9, 10, 1000, 2000, 3500]


// console.log(linearSearch(arr, 2000)) // 6

// const linearSearch = (arr, target) => Number(arr.filter(el => el === target).join("")) || -1



function binarySearch(arr, target) {

  	// Set integers pointing to the high and low range of possible indices
	let low = 0;
	let high = arr.length - 1;
	let mid;
  	// While high and low indices do not overlap...
  	while (low <= high) {
		// Find the midpoint between high and low indices
		mid = Math.floor((low + high) / 2);
		// Compare the target value to the midpoint value
		// If the target equals the midpoint...
		// Return the midpoint index
		if (arr[mid] === target) {
			return mid;
		}
		// If the target is higher than the midpoint...
		// Move the low pointer to midpoint + 1
		else if (arr[mid] < target) {
			low = ++mid;
		}
		// If the target is less than the midpoint...
		// Move the high pointer to midpoint - 1
		else {
			high = --mid;
		}

	}
	// Return -1 if the loop exits with overlapping pointer
	return -1;



	// let mid = Math.floor((low + high) / 2)


	// if (low > high) {
	// 	return -1
	// }

	// if (target === arr[mid]) {
	// 	return mid
	// }

	// if (target > arr[mid]) {
	// 	low = mid + 1
	// }

	// if (target < arr[mid]) {
	// 	high = mid - 1
	// }


	// return binarySearch(arr, target, high, low)

}

// let arr = [1, 4, 6, 9, 10, 1000, 2000, 3500]

// console.log(binarySearch(arr, 3500)) // 7

module.exports = [linearSearch, binarySearch]
