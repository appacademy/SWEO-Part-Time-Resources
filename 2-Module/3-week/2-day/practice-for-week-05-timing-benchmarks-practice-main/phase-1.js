// Adds up positive integers from 1-n

// big O
// o(1) space, o(n) time
function addNums(n) {
	let sum = 0; // space complexity?
				 // o(1)? or o(n)?
				 // o(1)

	for (let i = 0; i <= n; i++) { // time complexity?
	  sum += i;					   // o(n)
	  // sum = sum + 1
	}

	return sum;
}

// o(1) + o(10)
// o(1) + o(1)
// o(1)

// o(2n) + o(4n)
// o(n) + o(n)
// o(n)

// Adds up values of addNums(1) through addNums(n)

// big O
// o(n) space
// o(n^2) time
function addManyNums(n) {
	if(!n) return n; // space o(1)
	return addManyNums(n - 1) + addNums(n);
}

// big O
// o(1) space
// o(n^2) time
function addManyNums(n) {
	let sum = 0;
	for (let i = 0; i <= n; i++) { // time complexity
	  sum += addNums(i);           // outer loop o(n)
		                           // inner loop o(n)
								   // o(n * n)
	}						       // o(n^2)
	return sum;
}


// const value = addManyNums() // undefined
// console.time('timer')
// const value = addManyNums(10000)
// console.log(value)
// console.timeEnd('timer')

module.exports = [addNums, addManyNums];
