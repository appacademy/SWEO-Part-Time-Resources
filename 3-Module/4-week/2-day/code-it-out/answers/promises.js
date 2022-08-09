// 1) PROMISE are just fancy OBJECTS that developers build so we can USE IT TO wrap around and WORK WITH ASYNC OPERATIONS. It represents the eventual completion or failure of said async operations. Promises are good to handle async-like background operations like server requests, or downloading content since we don't know "when" the request will complete.
// ------Answer t/f: True

// 2) Promises are another alternative to handle async operations in a manageable away! (another way to avoid callstack hell when creating a synchronous behavior)
// ------Answer t/f: T

// 3) (Guess before executing the below function) The below function will log "go" and then "stop"
// ------Answer t/f:
function go(){
    // in order for this to use .then we need to return a promise object that can then have a .then as a property/method in it.
    const pObj= new Promise((resolve, reject)=>{
        console.log("go");

        // if we do not have a resolve or reject, our promise will be in a PENDING State.
        resolve("go"); //resolved state
        // reject("error"); //reject state
        //once the promise is fulfilled and resolved successfully, it will have a value of whatever is passed to the resolve.
    });
    return pObj;

}
go().then(()=>console.log("stop")).catch(()=>console.log("houston we have a problem")); 

// 4) The three state of a promise object: resolved, rejected, pending
// ------Answer t/f: T