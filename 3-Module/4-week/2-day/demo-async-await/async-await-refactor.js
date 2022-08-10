function asyncReview(){
    // let's say I wanted a setTimeout with a callback to be executed after 3 seconds to be executed 
    // setTimeout(callback, delay)
    setTimeout(()=>{
        console.log("1ST setTimeout executed after 3s");
    }, 3000);
    
    //and then another setTimeout with a callback to be executed after 1 second ONLY after the first setTimeout has finished.
    setTimeout(()=>{
        console.log("2ND setTimeout only after 1st finishes logging");
    }, 1000);

    console.log("third log, this is the last one")
}

// asyncReview();

console.log("------------------nested callbacks to get synchronous behavior-----------")

function callbackHell(){
    setTimeout(()=>{
        // after 3s execute these lines of code
        console.log("1ST setTimeout executed after 3s");
        //in order to execute the next timeout only after the first timeout, then we need to nest it within the callback of the first timeout
        setTimeout(()=>{
            console.log("2ND setTimeout only after 1st finishes logging");
            console.log("3RD log, this is the last one");
        }, 1000);
    }, 3000);
   
}

// callbackHell();

// Whats another way of handling this async code to have like a synchronous behavior without doing potentially really large amount of callbacks? (i want more readable code!)
console.log("---------------promises---------------")
// create out promise and the promise around our setTime
function timeoutLog(message, delay){
    // we need to return a promise after we create it
    const promiseObj = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        }, delay)
    });
    return promiseObj;
}

// consume the promise
function promiseLand(){
    // const promiseObj = timeoutLog("1ST setTimeout executed after 3s", 3000);

    // then: handles the fulfilled state one the promise has been fulfilled (resolve) "then" go to the next part
    // catch: handles the rejected state
    timeoutLog("1ST setTimeout executed after 3s", 3000)
        .then(()=>timeoutLog("2ND setTimeout only after 1st finishes logging", 1000))
        .then(()=>timeoutLog("3RD setTimeout only after 2nd finishes logging", 1000))
        .then(()=>timeoutLog("4RD setTimeout only after 3rd finishes logging", 1000))
        .then(()=>console.log("finally done with handling async data"))
        .catch(()=>console.log("error"))
}

// promiseLand();

console.log("-------------async await syntax-------")
// ------------another way of handling async operations --> async await
// create out promise and the promise around our setTime
// ------------creation of the promise----------
function timeoutLog(message, delay){
    // we need to return a promise after we create it
    const promiseObj = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(message);
            resolve("we have received the data!");
            // reject("houston we have an error!")
        }, delay)
    });
    return promiseObj;
}

// ------------consume the promise------------
// const promiseLand = async () => {} //arrow function syntax for async

async function asyncAwaitRefactor(){
    try {
        // we only await for the promise to be fulfilled. If it's in a RESOLVE state, continue to the next line (also the promise's value can be stored in a variable like `data`). If the promise is in a REJECT state, then throw an error! (we catch this error in the catch block of our try/catch).
        const data = await timeoutLog("1ST setTimeout executed after 3s", 3000)
        
        console.log("data after awaitng the promise:", data);

        await timeoutLog("2ND setTimeout only after 1st finishes logging", 1000)

        await timeoutLog("3RD setTimeout only after 2nd finishes logging", 1000)

        await timeoutLog("4RD setTimeout only after 3rd finishes logging", 1000)

        console.log("finally done with handling async data")
        
        return "hello timeout";

    } catch (error) {
        
        console.log("Error: ", error);
    }
}

// console.log(asyncAwaitRefactor()) // --> returns a promise {data}
asyncAwaitRefactor()