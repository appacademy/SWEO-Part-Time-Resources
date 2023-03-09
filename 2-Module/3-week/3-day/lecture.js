// const input = '0b11001010'

// function binaryToDecimal(binary){
// 	// let res = []
// 	let sum = 0
// 	// binary.length - 1
// 	const reversedStr = binary.split('').reverse().join('')
// 						// time o(n)    // time o(n) // space o(1)
// 						// space o(n)
// 	for(let i = 0; i < reversedStr.length -2; i++){
// 		sum += Math.pow(2, i) * reversedStr[i]
// 	}

// 	return sum
// }

// // time o(n)
// // space o(n)

// console.log(binaryToDecimal(input))

const arr = [1,2,3,4]

// arr.push(5)
// // space o(1)
// // time o(1)

// // dynamic arrays
// // [1,2,3,4,null,null,null,null]
// // [1,2,3,4,5,null,null,null]
// // time o(1)
// // [1,2,3,4,5,6,7,8]
// // time o(1)
// // [1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,null]
// // time o(n)

// arr.pop()

// // [1,2,3,4]

// // space o(1)
// // time o(1)

// arr.shift()

// // space o(1)
// // time o(n) in js o(n^2)

// // [1,2,3,4]
// // [null,2,3,4]
// // [2,3,4]

// arr.unshift(10)
// // space o(1)
// // time o(n^2)

// // [1,2,3,4]
// // [null, 1,2,3,4]
// // [10,1,2,3,4]

// arr.find()
// // [1,2,3,4,5,6,7,8,9]
// // Worst case time o(n) n = arr.length
// // best case time o(1) arr[0] == true
// // average case o(n) n = can be anywhere but the first and last index

// // [1,2,3]
// arr.filter()
// // time o(n)
// // space o(n)

// arr.map()
// // time o(n)
// // space o(n)

// arr.reduce()
// // time o(n)
// // space o(1)

// arr.every() // returns either true or false
// time o(n)
// space o(1)

// const addSumOfTwoArrays = (a,b) => {
// 	const sum1 = a.reduce((accum, current) => accum + current)
// 	const sum2 = b.reduce((accum, current) => accum + current)

// 	return sum1 + sum2
// }

// // space o(1)
// // time

// console.log(addSumOfTwoArrays([1,2,3,4],[5,6,7]))


// const quadraticIteration = (a,b) => {
// 	a.forEach(element => { // o(n)
// 		b.forEach(el => {
// 			console.log(el) // o(n)
// 		})
// 	});
// }

// time = o(n * n) --> o(n^2)
// console.log(quadraticIteration([1,2,3,4], ['hello', 'world', 'javascript', '!']))


const test = (arr) => {
	arr.map((el) => el * 2).map((el) => el * 3).forEach(el => {
		console.log(el)
	})

	// let newArr = arr.map(el => el * 2) // o(n)
	// newArr = newArr.map(el => el * 3) // o(n)
	// newArr.forEach(el => console.log(el)) // o(n)
}

// time o(n)

// test([1,2,3,4])
