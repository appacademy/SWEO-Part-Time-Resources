let flatten = (arr) => {
	debugger
	let flat = []
	for (let index of arr) {
		if (typeof index === 'number') flat.push(index) // base case.
		if (Array.isArray(index)) flat.push(...flatten(index)) // Recursive case, and step. 
	}
	return flat
}

console.log(flatten([1, 2, [3], [4, [5], 6], [[[[[7]]], 8]]]))
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let Flatspread = (arr) => {
	debugger
	let flat = []
	for (let index of arr) {
		debugger
		if (typeof index === 'number') flat.push(index)
		if (Array.isArray(index)) flat = [...flat, ...Flatspread(index)]
	}
	return flat
}

console.log(Flatspread([1, 2, [3], [4, [5], 6], [[[[[7]]], 8]]]))
// I want [1, 2, 3, 4, 5, 6, 7, 8]
