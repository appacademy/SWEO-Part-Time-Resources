let consoleEachItem = (arr) => {
	debugger
	for (let index of arr) {
		if (typeof index === 'number') console.log(index) // base case. No return needed
		if (Array.isArray(index)) consoleEachItem(index) // Recursive case, and step. No return needed
	}
}

consoleEachItem([1, 2, [3], [4, [5], 6], [[[[[7]]], 8]]])
 // 1
 // 2
 // 3
 // 4
 // 5
 // 6
 // 7
 // 8

// Maybe I want [1, 2, 3, 4, 5, 6, 7, 8].
// If so, I'll need to have a return on line 5 && 6 with something
