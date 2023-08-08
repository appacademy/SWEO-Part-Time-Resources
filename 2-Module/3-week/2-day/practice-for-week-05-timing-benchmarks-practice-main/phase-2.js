const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) { // increment = 2, increment = 100, increment = 1000000
  // Fill this in
  let result = []; //space o(10) --> space o(1)
  let inc = increment // space o(1)
  for(let i = 1; i <= 10; i++){ // time o(1)
	inc = i * increment // space o(1)
	result.push(addNums(inc)) // time o(n)
  }
  return result
}

// big - O
// time o(10 * n) --> o(1 * n) --> o(n)
// space o(1 + 1 + 1) --> space o(1)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
	let result = [] // space o(1)
	for(let i = 1; i <= 10; i++){ // time o(1)
		result.push(addManyNums(increment * i)) // time o(n^2)
	}
	return result
}

// big o
// time o(10 * n^2) --> o(1 * n^2) --> o(n^2)
// space o(1)

module.exports = [addNums10, addManyNums10];
