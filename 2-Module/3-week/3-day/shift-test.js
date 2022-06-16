const fs = require('fs');

function shiftTest(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        arr.shift();
    }

    return arr;
}

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

testShift(2000)