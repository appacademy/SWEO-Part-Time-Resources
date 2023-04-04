
function bubbleSort(arr) {
	if(!arr.length) return arr
    // Iterate through the array
	for(let i = 0; i < arr.length - 1; i++){
		let swapped = false;
		for(let j = 0; j < arr.length - 1; j++){
			let curr = arr[j]
			if(curr > arr[j + 1]){
				arr[j] = arr[j+1]
				arr[j+1] = curr
				swapped = true
				if(swapped){
					console.log(arr.join(","));
				}
			}
		}
	}
	return arr
}

// space o(1)
// time o(n^2)

module.exports = bubbleSort;
