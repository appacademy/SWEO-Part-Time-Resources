const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let totals = []
  for(let i = increment; i <= increment * 10; i+= increment){
    let startTime = Date.now()
    totals.push(addNums(i))
    let endTime = Date.now()


    console.log(`${endTime - startTime}`)
  }
  return totals
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
  let totals = []
  for(let i = increment; i <= increment * 10; i+= increment){
    let startTime = Date.now()
    totals.push(addManyNums(i))
    let endTime = Date.now()

    console.log(`${endTime - startTime}`)
  }
  return totals
}


n = 10000000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000000);

console.log("\n***********\n");

n = 10000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(10000);