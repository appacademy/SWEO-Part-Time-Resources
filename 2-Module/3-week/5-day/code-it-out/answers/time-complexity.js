function printPairSumsThenPrintNumsTWICE(n) {

    for (let i = 0; i < 10; i++) { // O(10 * n) --> O(n)
        for (let j = 0; j < n; j++) {
            console.log(`${i} + ${j} = ${i + j}`);
        }
    }

    for (let i = 0; i < n; i++) { // O(n * n) --> O(n^2)
        for (let j = 0; j < n; j++) {
            console.log(`${i} + ${j} = ${i + j}`);
        }
    }

    //the one that we will take will be the less efficient one (slower)
    //answer: 
        //time-complexity: O(n^2);
        //space-complexity: O(1)

}