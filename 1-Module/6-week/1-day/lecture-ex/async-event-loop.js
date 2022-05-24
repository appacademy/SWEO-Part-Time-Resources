console.log("----------------Asyncronous Javascript----------------")
console.log("----Synchronous `blocking code`----")
//execution of code in order and is predictable / guaranteed
let foo = function () {
    console.log("two");
};

let fibonacci = (term) => {
    //base cases
    if (term === 0) return 0;
    if (term === 1) return 1;
    if (term === 2) return 1;

    //recursive case + recursive step
    let answer = fibonacci(term - 1) + fibonacci(term - 2);
    // console.log(answer);
    return answer;
}


console.log("one");
// foo();
// console.log(fibonacci(45));
console.log("three");

console.log("----Asynchronous `NON-blocking code`----")
//- code that doesn't block up the callstack & is unpredictable / order not guaranteed. 

//- Why do we need non-blocking code? think of a request being made for data to a different server, or a user input (we don't ever know when they going to happen or resolve)

console.log("synchronous code start....")


const requestForData = () => {
    console.log("Here is your data...");
    console.log("request did not block up the callstack!")
    console.log("i.e. request was processed by another API / server on the web!")
}
setTimeout(requestForData, 3000);
// setTimeout, takes a callback (first arg) and then executes the callback after the given delay (second arg)
// setTimeout(requestForData, 0); //what happens if I put the delay to 0?


console.log("synchronous code end....")

console.log("----------------Async & Event Loop in action----------------");

//helloFunc callback
const helloFunc = () => {
    console.log("This is the settimeout helloFunc with 0 seconds delay!")
}

//setTimeout IS ASYNCRONOUS CODE. It takes a callback function, and then a delay as arguments
setTimeout(helloFunc, 0);

let fibonacci2 = (term) => {
    //base cases
    if (term === 0) return 0;
    if (term === 1) return 1;
    if (term === 2) return 1;

    //recursive case + recursive step
    let answer = fibonacci2(term - 1) + fibonacci2(term - 2);
    // console.log(answer);
    return answer;
}
console.log(fibonacci2(25));

//what will be outputted first? The fibonacci of 25 answer or helloFunc's console.log
//