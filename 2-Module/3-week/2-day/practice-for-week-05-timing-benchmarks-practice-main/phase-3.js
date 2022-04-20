const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let sums = []; // space o(1)
  console.time("timer");

  for (let i = 1; i <= 10; i++) { // time complexity o(1)
    console.timeLog("timer");
    sums.push(addNums(i * increment)); // increment = n
									   // time complexity o(n)
  }

  console.timeEnd("timer");

  return sums;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let results = []; // constant space o(1)

  console.time("addManyNums time");

  for (let i = 1; i <= 10; i++) {
    const start = Date.now();

    results.push(addManyNums(i * increment)); // time complexity o(n^2)

    console.timeLog("addManyNums time");

    const end = Date.now();
    console.log(`Runtime #${i}: ${end - start} ms`);
  }

  console.timeEnd("addManyNums time");

  return results;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
