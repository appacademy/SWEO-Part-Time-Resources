const fs = require('fs');

//shiftTest: the function we are testing
function shiftTest(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        arr.shift();
    }

    return arr;
}

//arrayMaker: given a number, make an array of elements based on number. i.e. num = 3--> [0,1,2]
const arrayMaker = function (numberOfArraysToMake) {
    const arr = []
    for (let i = 0; i < numberOfArraysToMake; i++) {
        arr.push(i);
    }
    return arr;
}

// console.log(arrayMaker(100));

const testShift = function (numberOfTests) {
    for (let i = 0; i < numberOfTests; i++) {
        //build an array each test will have a new array with a different size so that we can compare the different time of execution for diffrent input length
        const arrayTest = arrayMaker(i); //at each test make array(1), array(2), array(3) for each for loop execution

        // console.time(); //testing the time / operations that shiftTest will take at each different array lengths
        const start = performance.now();
        shiftTest(arrayTest);
        const end = performance.now();
        const runTime = end - start;
        console.log(runTime);
        // console.timeEnd();

        //extra to write the runtime into a file for us to just easily copy pasta
        fs.appendFile('./shift-test.txt', runTime.toString() + '\n', err => {
            if (err) {
                console.error(err);
            }
            // done!
        });
    }
}

testShift(2000) //testShift 2000 times, each time with a different array size i.e. test-1 w/ array(1), test-2 w/ array(2) ... test-2000 w/ array(2000) and getting the runtime to compare for each test.