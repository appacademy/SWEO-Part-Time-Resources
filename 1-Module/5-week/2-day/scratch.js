//LET CONST VAR

//Var is function scoped

//Let and const are block scoped

//Var can be redeclared even in the same scope

/*
var apple = "apple";
var apple = "pear";

//Let can ONLY be redeclared if it is in a DIFFERENT scope!!!

let pear = "pear";


function pear() {
    let pear = "apple";
    console.log(pear);
}

*/
//Const cannot be redeclared or reassigned!


//CALLSTACK
// A stack is similar to a stack of papers, new papers must be placed on top of the pile, and in
// order to access a piece of paper on the bottom, we must remove each paper on top of it.

//FILO - First in, last out

//When a function is called, it is added to the TOP of the callstack, and when the function returns
//it is popped off the top

//Events (setTimeout) have to wait until the callstack is empty to run

//RECURSION
//What is recursion
//Recursion is the act of a function calling itself
//  -Often used in place of iteration

//Recursive function are made of two parts:
//Base case - ends recursion
//Recursive case - resumes recursion

//Base case is when newNumber = 0; recursive case is when newNumber > 0;

/*
function countDown(n) {
    console.log(n);
    let newNumber = n - 1;

    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(10); 
countDown(9); 
countDown(8); 
countDown(7); 
countDown(6); 
*/

//FIBONACCI
// 1, 1, 2, 3, 5, 8, 13, 21
//Each value is the sum of the previous two numbers
//n is the amount of times we want to call fib
//Base case - n < 2; recursive case is n > 2;
/*
function fib(n) {
    if (n < 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);

}

console.log(fib(7))

fib(7) = fib(6) + fib(5);
fib(6) = fib(5) + fib(4);
fib(5) = fib(4) + fib(3);
fib(4) = fib(3) + fib(2);
fib(3) = fib(2) + fib(1)
fib(2) = fib(1) + fib(0);
fib(1) = 1
*/