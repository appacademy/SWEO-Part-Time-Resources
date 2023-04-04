//Promises
//helps us pass data from an async into another function before running the ladder
//Promises help us simplify callbacks to asynchronous functions

//We can use promises to chain several async functions together

//Vocab:

//Action - The primary function of the promise
//Pending - The promise is neither fulfilled or rejected
//Fulfilled - The promise action has succeded
//Rejected - the promise action failed
//Settled - The promise is either fulfilled or rejected

//SYNTAX -

const promiseGuy = new Promise((resolve, reject) => {
    if ("successful condition") {
        resolve(num);
    } else {
        reject(() => console.error())
    }
})


const zz = new Promise((resolve) => {
    setTimeout((msg) => resolve(msg), 1000)
})

function giveMeMsg(msg) {
    console.log(msg);
}

zz.then(giveMeMsg);



/*

 = new Promise(giveMeMSG, reject)

*/

//Promise methods - 
//THEN and CATCH - Both return a new promise

//THEN -
//Takes in 2 parameters 

//1. onFulfilled - This is the callback to invoke if the promise is fulfilled
//2. onRejected - This is the callback to invoke if the promise is rejected

//CATCH - Takes in 1 parameter (an error)

zz.then(onFulfilled, onRejected).catch(error)

//If zz is rejected, onRejected will be called, but if either onFulfilled or onRejected fail, catch will throw an error



const waitingForData = new Promise((resolve, reject) => {
    const data = fetch("give me a number");

    if (data) {
        resolve(data);
    } else {
        reject(() => console.log("couldnt find " + data))
    }
})