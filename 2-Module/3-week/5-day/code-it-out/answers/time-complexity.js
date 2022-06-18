function printPairSumsThenPrintNumsTWICE(n) {

    for (let i = 0; i < 10; i++) { //O(10 * n)
        for (let j = 0; j < n; j++) {
            console.log(`${i} + ${j} = ${i + j}`);
        }
    }

    for (let i = 0; i < n; i++) { //O(n * n)
        for (let j = 0; j < n; j++) {
            console.log(`${i} + ${j} = ${i + j}`);
        }
    }

    //O(n^2) bigger than O(n) so we take the bigger
    //answer = O(n^2)

}