const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const resArr = [];
  let nextInc = increment;
  for (let i = 0; i < 10; i++) {

    const startTime = Date.now();

    const addNumsRes = addNums(nextInc);
    resArr.push(addNumsRes);
    nextInc += increment;

    const endTime = Date.now();
    const runTime = endTime - startTime;
    console.log(runTime);
  }

  return resArr;

}


function addManyNums10Timing(increment) {

  const resArr = [];
  let nextInc = increment;
  for (let i = 0; i < 100; i++) {

    const startTime = Date.now();

    const manyNumsRes = addManyNums(nextInc);
    resArr.push(manyNumsRes);
    nextInc += increment;

    const endTime = Date.now();
    const runTime = endTime - startTime;
    console.log(runTime);

  }

  return resArr;

}


// n = 1000000
// console.log(`addNums(${n}): `);
// addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);