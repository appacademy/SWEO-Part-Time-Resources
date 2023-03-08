// Time and Space complexity
// Big - O worst case

// Not only can we time our code, but we can also learn to read it
// and we can determine the growth analysis

// This is what we call complexity analysis and we express it through
// big o analysis

// Three types of growth
// Constant
// Linear
// Quadratic

// Best description:
// Time complexity is the time it takes for our application to finish running
// relative to the given input
// Space complexity is the amount of space growing/generating in relation
// to the given input

// Constant time/space: o(1)
// Best time/space complexity, and the reason why is because
// regardless of the input, the amount of time it takes to run
// will remain

// examples:
let num = 0; // constant space o(1)
num++
// num = num + 1

const arr = [1,2,3,4]
const longArr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// dynamic arrays
arr.pop() // constant time o(1)
longArr.pop() // constant time o(1)


// Linear time/space: o(n)
// Grows equally in comparison to the given input
// Example:

function iter(array){
	for(let i = 0; i < array.length; i++){
		console.log(array[i])
	}
}

// space complexity = o(1)
// time complexity = o(n) where n = array.length

arr.shift() // linear time o(n)
// [1,2,3,4]
// [null,2,3,4]
// [2,3,4]

// Quadratic Time/Space: o(n^2)
// This type of complexity normaly deals with
// nested data
// examples: nested loops, nested objects

const graph = [
				[1,2,3,4,5],
				[6,7,8,9,10],
				[11,12,13,14,15],
				[16,17,18,19,20],
				[21,22,23,24,25]
			  ]

// const traverseGraph = (g) => {
// 	for(let row = 0; row < g.length; row++){
// 		const currentRow = g[row]
// 		for(let column = 0; column < currentRow.length; column++){
// 			const currentColumn = currentRow[column]
// 			console.log(currentColumn)
// 		}
// 	}
// }

// traverseGraph(graph) // time complexity o(n^2) where n = row/column

// Best Case - Big Omega
// Average Case - Big Theta
// Worst Case - Big-O

const arr1 = [0,0,0,0,0,1] // worst case linear time o(n)
const arr2 = [0,0,0,1,0,0] // average case linear time o(n)
const arr3 = [1,0,0,0,0,0,0] // best case constant time o(1)

// function checkIfOne(arr){
// 	for(let i = 0; i < arr.length; i++){ // time o(n)
// 		if(arr[i] === 1) return true
// 	}
// 	// for(let i = 0; i < arr.length; i++){ // time o(n)
// 	// 	if(arr[i] === 1) return true
// 	// }
// 	// for(let i = 0; i < arr2.length; i++){ // time o(n)
// 	// 	if(arr[i] === 1) return true
// 	// }
// 	return false
// }

// time o(n + n + n) --> o(n)

// timing benchmarks

// console.time(name of timer)
// console.timeEnd(name of timer)

// Date.now()


function iterateThroughNums(n){
	const start_time = Date.now()
	let total = 0
	for(let i = 0; i < n; i++){
		total += i
	}
	const end_time = Date.now()
	console.log(`${end_time - start_time}ms`)
	return total
}

// console.time('timer1')
// iterateThroughNums(100000000)
// console.timeEnd('timer1')
