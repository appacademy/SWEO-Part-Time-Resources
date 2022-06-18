const fs = require('fs');

function first(n) {
    if (n < 0) return;
    // console.log(n);
    first(n - 1);
  }


const testRecursion = function (numberOfTests) {
    for (let i = 0; i < numberOfTests; i++) {

        const start = performance.now();
        //replace the patty
        first(i) //as i grows, unshift's operations should grow O(n^2) time.
        const end = performance.now();

        const runTime = end - start;
        console.log(runTime);


        //extra to write the runtime into a file for us to just easily copy pasta
        fs.appendFile('./test-recursion.txt', runTime.toString() + '\n', err => {
            if (err) {
                console.error(err);
            }
            // done!
        });
    }
}

testRecursion(4000) //testRecursion 2000 times, each time with a different input size i.e. test-1 w/ input(1), test-2 w/ input(2) ... test-2000 w/ input(2000) and getting the runtime to compare for each test.