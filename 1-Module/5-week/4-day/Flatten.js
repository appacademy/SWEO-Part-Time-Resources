// let Flatten = (arr, flat = []) => {
// 	debugger
// 	for (let index of arr) {
// 		if (typeof index === 'number') flat.push(index)
// 		if (Array.isArray(index)) Flatten(index, flat) 
// 	}
// 	return flat
// }


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

// console.log(Flatten([1, 2, [3], [4, [5], 6], [[[[[7]]], 8]]]))
console.log(Flatspread([1, 2, [3], [4, [5], 6], [[[[[7]]], 8]]]))
// I want [1, 2, 3, 4, 5, 6, 7, 8]
