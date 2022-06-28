const fs = require('fs');

function pushTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr;
}


const testPush = function (numberOfTests) {
    for (let i = 0; i < numberOfTests; i++) {

        const start = performance.now();
        //replace the patty
        pushTest(i)
        const end = performance.now();

        const runTime = end - start;
        console.log(runTime);


        //extra to write the runtime into a file for us to just easily copy pasta
        fs.appendFile('./push-test.txt', runTime.toString() + '\n', err => {
            if (err) {
                console.error(err);
            }
            // done!
        });
    }
}

testPush(3000) //testPush 2000 times, each time with a different input size i.e. test-1 w/ input(1), test-2 w/ input(2) ... test-2000 w/ input(2000) and getting the runtime to compare for each test.