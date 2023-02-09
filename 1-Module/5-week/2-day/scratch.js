// What is a recursive function?
// a function that calls itself until it doesn't
// What are the 'parts' of a recursive function?
// the base case (tells the recursive function when to stop)
// the recusive step (this gets us closer to our base case)
// the recursive call

function foo() {
    debugger;
    let res = 2 + bar();
    debugger;
    return res
}

function bar() {
    debugger;
    let res = 6 + baz();
    debugger;
    return res
}

function baz() {
    debugger;
    let res = 3;
    debugger
    return res;
}

console.log(foo());
