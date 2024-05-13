//Asynchronous Code

//When JS comes across async code, it puts it into "timeout" until all synchronous code has been
//run

//This causes issues for when we NEED the result of that async code to run subsequent operations

//A promise allows us to tell javascript to wait until the async code is done to do the next bit 
// of code

//Promises give us two different options - One function to run if the promise was successful
// and another to run if it failed
//Resolve - function to run if successful
//Reject - function to run if failure occurs

const promise = new Promise((resolve, reject) => {
    //Whatever async code goes here
    setTimeout(() => resolve(), 1000);

    //let resBody = await fetch('http://localhost:5000/dogs);
    // if (resBody) {
    //     resolve()
    // }
}).then(() => {
    console.log("Success");
}).catch(() => {
    console.log("An error occurred")
})

//How we can we determine what function will run when we resolve?
// .then()
// A .then() will run the next function ONLY IF the promise resolves.

//If the promise rejects, a .catch() will run

/* 
console.log(1);

function timeOutGuy() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000)
  }).then(() => {
    console.log(3);
  }).catch(() => {
    console.log("Error occurred.")
  })
}

timeOutGuy();
console.log(6);
*/