//CALLSTACK
//A structure used by Javascript to keep track of all function calls

//When a function is called a new frame is added to the top of the stack
//When a function returns it is popped off the stack

//An event (such as setTimeout) annot be handled until the callstack is empty

//RECURSION
//The act of a function calling itself
//Recursion is often used in place of iteration

//Recursive functions are made of two parts:
//Base case - ends recursion
//Recursive case - resumes recursion

/*
function countDown(n) {
    console.log(n);
    let newNumber = n - 1;
    
    if (newNumber >= 0) {
        countDown(newNumber);
    }
}

countDown(10);
countDown(9);
countDown(8);
countDown(7);
countDown(7);
//....
countDown(0);
*/

//FIBONACCI function
// 1, 2, 3, 5, 8, 13, 21
//Each value is the sum of the two previous values

/*
function fib(n) {
    if (n < 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(7))
*/

/*
fib(7) = fib(6) + fib(5);
fib(6) = fib(5) + fib(4);
fib(5) = fib(4) + fib(3);
fib(4) = fib(3) + fib(2);
fib(3) = fib(2) + fib(1)
fib(2) = fib(1) + fib(0);
fib(1) = 1
*/

//Let
//Is only redeclarable if its in a different scope
//Block scoped

/*
let apple = "apple";
if (true) {
    let apple = "pear";
    console.log(apple);
}
*/

//Var
//IS redeclarable IN THE SAME SCOPE
//Var is FUNCTION scoped, occasionally global

/*
var apple = "apple";
var apple = "pear";
*/

//CONST - is not redeclarable nor reassignable
