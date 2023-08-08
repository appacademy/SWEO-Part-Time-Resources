const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let start_time = Date.now()
  let result = []; //space o(10) --> space o(1)
  let inc = increment // space o(1)
  for(let i = 1; i <= 10; i++){ // time o(1)
	inc = i * increment // space o(1)
	result.push(addNums(inc)) // time o(n)
  }
  let end_time = Date.now()

  console.log(`${end_time - start_time}`)

  return result
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let start_time = Date.now()
  let result = [] // space o(1)
  for(let i = 1; i <= 10; i++){ // time o(1)
	  result.push(addManyNums(increment * i)) // time o(n^2)
  }
  let end_time = Date.now()
  console.log(`${end_time - start_time}`)
  return result
}


n = 1000000
console.time(`timer 1`)
console.log(`addNums(${n}): `);
addNums10Timing(1000000);
console.timeEnd(`timer 1`)

console.log("\n***********\n");

console.time(`timer 2`)
n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
console.timeEnd(`timer 2`)
