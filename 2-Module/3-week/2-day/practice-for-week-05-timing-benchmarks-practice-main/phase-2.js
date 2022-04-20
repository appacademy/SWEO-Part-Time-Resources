const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
// big O
// o(1) space
// o(n) time
function addNums10(increment) {
	let counter = increment; // space? o(1)
	// counter takes up 1 space
	// counter = 100
	let sums = []; // space o(1)

	for (let i = 1; i <= 10; i += 1) { // time complexity
									   // o(1)
									   // o(1 + 1 + 1 + 1 + ...10)
	  sums.push(addNums(counter));     // time complexity
									   // o(n)
									   // o(1n + 1n + 1n + 1n + ...10n)
									   // o(n + n + n)
									   // o(n)
	  counter += increment;
	}
	return sums // space complexity is o(1)
	            // the length of our array is always 10
}

// Runs `addManyNums` in 10 increasing increments
// big o
// o(1) space
// o(n^2) time
function addManyNums10(increment) {
	let newArr = [] // space o(1)
	let n = 0 // space o(1)

	for (let i = 1; i <= 10; i++) { // time o(1)
	  n = i * increment

	  newArr.push(addManyNums(n)) // time o(n^2)
	}
	return newArr

};


module.exports = [addNums10, addManyNums10];
