function printPairSumsThenPrintNumsTWICE(n) {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`${i} + ${j} = ${i + j}`);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`${i} + ${j} = ${i + j}`);
        }
    }

}