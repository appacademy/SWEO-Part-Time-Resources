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

