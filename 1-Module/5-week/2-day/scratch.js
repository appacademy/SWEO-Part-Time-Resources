
function countDown(num) {
    console.log(num);

    const newNumber = num - 1;
    if (newNumber >= 0) {
        countDown(newNumber)
    }
}

countDown(10)