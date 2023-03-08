// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
    let sum = 0;
	for(let i = 0; i <= n; i++){
		sum += i;
	}
	return sum
}
// big-O
// time o(n)
// space o(1)

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum = 0;
  for(let i = 0; i <= n; i++){ // time o(n)
	sum += addNums(i) // time o(n)
  }

  return sum
}

// big - O
// time o(n * n) --> o(n^2)
// space o(1)


module.exports = [addNums, addManyNums];
