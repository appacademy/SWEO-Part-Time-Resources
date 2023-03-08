const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Your code here
  let result = []; // space o(1)
  for(let i = 1; i <= 10; i++){ // time o(10) --> constant time o(1)
	  result.push(addNums(i*increment)) // time o(n)
  }
  // console.log('result length = ', result.length)
  return result
}


function addManyNums10Timing(increment) {
  // Your code here
  let result = []; // space o(1)
  for(let i = 1; i <= 10; i++){ // time o(1)
	  result.push(addManyNums(i*increment)) // time o(n^2)
  }
  return result
}


n = 1000000
console.time('timer1')
console.log(`addNums(${n}): `);
addNums10Timing(1000000);
console.timeEnd('timer1')

console.log("\n***********\n");

n = 1000
console.time('timer2')
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
console.timeEnd('timer2')
