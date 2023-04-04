//Promises
//Help us simplify callbacks to async functions

//We can use promises to chain several async functions

//Vocabulary

//Action - The primary function of the promise (ex: fetching data from an API)

//Promises have 3 states
//Pending - Promise has neither rejected or resolved
//Fulfilled - The promises's action has been fulfilled
//Rejected - The promises's action was rejected

//Settled - The promise is DONE, it has been fulfilled OR rejected

//SYNTAX -
const promiseGuy = new Promise((resolve, reject) => {
    if ("successful condition") {
        resolve("arguments to pass to next async")
    } else {
        reject("do whatever we want if it fails")
    }
})

//Promise objects have 2 built in methods, THEN and CATCH
//Both of them return a new promise object which makes them chainable

//THEN - Accepts 2 parameters
//onFulfilled - the function to invoke if the promise is fulfilled
//onRejected - function to invoke if promise is rejected

//Basically we're just passing resolve and reject all over again

const asking = new Promise(resolve => {
    setTimeout((msg) => resolve(msg), 1000);
})

const secondGuy = (msg) => console.log(msg);

asking.then(secondGuy, reject)

const secondGuyPromise = new Promise((resolve, reject) => {
    if ("secondGuy is successful") {
        console.log("SecondGuys was successful")
    } else {
        reject("Error you suck")
    }
}) 

//CATCH - Accepts 1 parameter
//onRejected - again the function to invoke if promise fails

asking.then(secondGuy, onRejected).catch(error);

//If the asking promise is rejected, onRejected will run
//if either onfulfilled or onrejected fail, catch will throw an error