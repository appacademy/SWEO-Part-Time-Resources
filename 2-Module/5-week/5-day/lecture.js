const insertionSortInPlace = (arr) => {
	let divider = 1;

	while(divider < arr.length){
		let temp = arr[divider]

		let i = divider

		while(i > 0){
			if(arr[i - 1] < temp){
				break
			} else {
				arr[i] = arr[i - 1]
				i--
			}
		}
		arr[i] = temp;
		divider++
	}
	return arr
}


const arr = [3, 2, 0, 4, 1]

//  [2, 3]
//  [3, 2] --> [3, 3] line 13
// temp = 2, arr[0] = temp, [2, 3] line 18


// [2,3,0,4,1], [2,3,3,4,1], [2,2,3,4,1], [0,2,3,4,1]
// divider = 3, i = 3 - 1, i = 2 - 1, i 1 - 1
// temp = 0, i = 0
console.log(insertionSortInPlace(arr))
// time o(n^2), space o(1)
