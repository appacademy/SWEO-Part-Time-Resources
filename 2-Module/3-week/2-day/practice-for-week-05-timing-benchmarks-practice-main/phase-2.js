const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let sums = []; // space complexity?
				 // constant space
				 // o(1)

  for (let i = 1; i <= 10; i++) {    // time complexity?
									 // o(10) simplifies to o(1)

    sums.push(addNums(i * increment)); // time complexity
									   // o(1n + 2n + 3n + ...10n) simplifies to o(n)
									   // o(n + n + n + n)
									   // o(n)
  }

  return sums; // array with the length of 10 regardless of input

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
    let results = [];  // constant space
					   // o(1)

	for (let i = 1; i <= 10; i++) {              // time complexity
		results.push(addManyNums(i * increment)); // o(1n^2 + 2n^2 + ..10n^2)
												  // simplifies
												  // o(n^2 + n^2 ...)
												  // o(n^2)
	}

  	return results; // array with the length of 10 regardless of input

}

// function

// o(n) + o(2n) + o(n^2)
// simplify
// o(n^2)

module.exports = [addNums10, addManyNums10];
