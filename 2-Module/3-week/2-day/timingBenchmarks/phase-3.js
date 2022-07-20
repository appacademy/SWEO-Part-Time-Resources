const [addNums, addManyNums] = require("./phase-1");

// using console.time
function addNums10Timing(increment) {
  console.time();

  let sums = [];
    for (let n = increment; n <= 10 * increment; n+=increment) {
      console.time('Time to complete');
      sums.push(addNums(n)); // linear
      console.timeLog('Time to complete');
      console.timeEnd('Time to complete');
    }
  return sums;
}

// using Date.now
function addManyNums10Timing(increment) {
  let sums = []; 
  for (let n = increment; n <= 10 * increment; n+=increment) {
    let start = Date.now();
    sums.push(addManyNums(n)); // quadratic
    let end = Date.now()
    console.log(`n = ${n}; It took ${end - start} ms to complete`)
  } 

return sums;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);