const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) { // increment = 1, increment = 1000, increment = 1000000
  // Fill this in
	let result = []; // space o(1)
	for(let i = 1; i <= 10; i++){ // time o(10) --> constant time o(1)
		result.push(addNums(i*increment)) // time o(n)
	}
	// console.log('result length = ', result.length)
	return result
}
// big O
// time o(1 * n) --> linear time o(n)
// space o(1)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
	let result = []; // space o(1)
	for(let i = 1; i <= 10; i++){ // time o(1)
		result.push(addManyNums(i*increment)) // time o(n^2)
	}
	return result
}

// big O
// time o(n^2)
// space o(1)

module.exports = [addNums10, addManyNums10];
