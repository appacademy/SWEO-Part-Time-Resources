//Recursion - A function calling itself
//Base case - to end recursion
//Recursive - to keep recursing
debugger
function countDown(num) {
    console.log(num);

    let newNumber = num - 1;

    if (newNumber >= 0) {
        countDown(newNumber)
    }
}

countDown(5)