// Random Array Generator
const randomNumberArr = (max) => {
  const finalArr = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    finalArr.push(randomNumber);
  }

  return finalArr;
};

//? Put your functions here


//! Testing Function and Input

let testingArr = [1, 10, 100, 1000, 10000, 100000, 1000000]; // 1 to 1 Mill

// Function to run tests
const runTests = (arr, cb) => {
  const finalArr = [];
  arr.forEach((el) => {
    const inputArr = randomNumberArr(el);

    console.time(`${cb.name}(${inputArr.length})`);
    let start = global.performance.now();

    cb(inputArr);

    let end = global.performance.now();
    console.timeEnd(`${cb.name}(${inputArr.length})`);

    finalArr.push((end - start).toFixed(3));
  });

  finalArr.forEach((el) => console.log(el));
};

//TODO Run your tests!

// Call runTests with testingArr, and your function
// example: runTests(testingArr, findMinimum); // DON'T Invoke your function

