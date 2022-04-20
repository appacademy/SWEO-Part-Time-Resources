// Adds up positive integers from 1-n
function addNums(n) {
	let total = 0; // o(1) constant space

	for (let i = 1; i <= n; i++) { // o(n) linear time
	  total += i;
	}

	return total;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
	let total = 0; // o(1) constant space

	for (let i = 1; i <= n; i++) { // time complexity?
	  total += addNums(i);         // o(n^2)
	}

	return total;

}



module.exports = [addNums, addManyNums];
