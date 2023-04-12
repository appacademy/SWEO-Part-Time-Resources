
function bubbleSort(arr) {
	let swapped = true;
	while (swapped) {
	  swapped = false;

	  for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		let next = arr[i + 1];

		if (current > next) {
		  arr[i] = next;
		  arr[i + 1] = current;

		  console.log(arr.join(","));
		  swapped = true;
		}
		// break;
	  }
	}
	return arr;
}

// space o(1)
// time o(n^2)

module.exports = bubbleSort;
