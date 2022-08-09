// 1) PROMISE are just fancy OBJECTS that developers build so we can USE IT TO wrap around and WORK WITH ASYNC OPERATIONS. It represents the eventual completion or failure of said async operations. Promises are good to handle async-like background operations like server requests, or downloading content since we don't know "when" the request will complete.
// ------Answer t/f:

// 2) Promises are another alternative to handle async operations in a manageable away! (another way to avoid callstack hell when creating a synchronous behavior)
// ------Answer t/f:

// 3) (Guess before executing the below function) The below function will log "go" and then "stop"
// ------Answer t/f:
function go(){
    console.log("go");
}
go().then(()=>console.log("stop")).catch(()=>console.log("houston we have a problem")); 

// 4) The three state of a promise object: resolved, rejected, pending
// ------Answer t/f: