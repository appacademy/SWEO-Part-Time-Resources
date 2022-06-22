const binaryToString = require("./binary-to-string.js")
const fs = require('fs');

//given a number (n) generate a binary line of of 8 * n number of bits
const generateBlob = function(n){
    const blob = [];
    for(let i=0; i< n*8; i++){
        const random = Math.random();
        if(random < 0.5){
            blob.push("0");
        }
        else{
            blob.push("1");
        }
    }
    return blob.join("");
}
// console.log(generateBlob(100));

const testBinary = function (numberOfTests) {
    for (let i = 0; i < numberOfTests; i++) {
        const binaryBlob = generateBlob(i);

        const start = performance.now();
        //replace the patty
        binaryToString(binaryBlob) //as i grows, unshift's operations should grow O(n^2) time.
        const end = performance.now();

        const runTime = end - start;
        console.log(runTime);

        //extra to write the runtime into a file for us to just easily copy pasta
        fs.appendFile('./test-binary.txt', runTime.toString() + '\n', err => {
            if (err) {
                console.error(err);
            }
            // done!
        });
    }
}

testBinary(1000) //testBinary 2000 times, each time with a different input size i.e. test-1 w/ input(1), test-2 w/ input(2) ... test-2000 w/ input(2000) and getting the runtime to compare for each test.