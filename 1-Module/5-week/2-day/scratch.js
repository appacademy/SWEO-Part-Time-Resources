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
    debugger;
    return res;
}

console.log(foo());
