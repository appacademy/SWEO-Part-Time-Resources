// 1) PROMISE are just fancy OBJECTS that developers build so we can USE IT TO wrap around and WORK WITH ASYNC OPERATIONS. It represents the eventual completion or failure of said async operations. Promises are good to handle async-like background operations like server requests, or downloading content since we don't know "when" the request will complete.
// ------Answer t/f: T

// 2) Promises are another alternative to handle async operations in a manageable away! (another way to avoid callstack hell when creating a synchronous behavior)
// ------Answer t/f: T (promise chain w/ .then .catch)

// 3) (Guess before executing the below function) The below function will log "go" and then "stop"
// ------Answer t/f:
function go(){
   
    // we are not returning a promise, we are returning undefined.

    //we need to return a promise in order to chain it with a .then and .catch (since they are methods/properties of a PROMISE OBJECT)
    return new Promise((resolve, reject)=>{
        console.log("go");
        // resolve("this is the go data"); //if we pass nothing to resolve, promise's value after it has resolved, will be undefined.
        // reject("error");
        // if we didn't resolve nor reject, our promise will remain in a PENDING state!
    })
}
go()
    .then((data)=>console.log(data))
    .then(()=>console.log("stop"))
    .catch(()=>console.log("houston we have a problem")); 

// 4) The three state of a promise object: resolved, rejected, pending
// ------Answer t/f: T