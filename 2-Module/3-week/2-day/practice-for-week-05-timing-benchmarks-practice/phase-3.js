const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let sum = []
  for(let i = increment; i <= 100 * increment; i += increment){
    const startTime = Date.now()
    sum.push(addNums(i))
    const endTime = Date.now()
    console.log(`${endTime - startTime}`)
  }
  return sum
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let sum = []
for(let i = increment; i <= 40 * increment; i += increment){
  const startTime = Date.now()
  sum.push(addManyNums(i))
  const endTime = Date.now()
  console.log(`${endTime - startTime}`)
}
return sum

}


// n = 1000000
// console.log(`addNums(${n}): `);
// addNums10Timing(100000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);