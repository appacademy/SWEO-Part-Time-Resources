const fs = require('fs');

// function unshiftTest(n) {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.unshift(i);
//     }
//     return arr;
// }

function unshiftTest(n) {
    arr = [];
    for (let i = 0 ; i <= n ; i++) {
      arr.unshift(i);
    }
    // return arr;
    arr.join('\n');
}



const testUnshift = function (numberOfTests) {
    for (let i = 0; i < numberOfTests; i++) {

        const start = performance.now();
        //replace the patty
        unshiftTest(i) //as i grows, unshift's operations should grow O(n^2) time.
        const end = performance.now();

        const runTime = end - start;
        console.log(runTime);


        //extra to write the runtime into a file for us to just easily copy pasta
        fs.appendFile('./unshift-test.txt', runTime.toString() + '\n', err => {
            if (err) {
                console.error(err);
            }
            // done!
        });
    }
}

testUnshift(8000) //testUnshift 2000 times, each time with a different input size i.e. test-1 w/ input(1), test-2 w/ input(2) ... test-2000 w/ input(2000) and getting the runtime to compare for each test.