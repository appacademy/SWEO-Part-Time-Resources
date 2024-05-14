//Asynchronous code

//When JS comes across async code, it puts it into "timeout" until all synchronous
//code has been run, then it runs the async code

//A promise tells JS to wait until the async code is done to then do subsequent
// synchronous code

//Promise gives us two different options - One function (resolve) to run if the 
//Async code was successful and another function (reject) to run if the async code
// failed

const promise = new Promise((resolve, reject) => {
    //Your async code goes here
    // setTimeout(() => {
    //     resolve('Howdy');
    // }, 1000);
    // reject()

    let response = fetch('http://localhost:5000/cats')

    if (response) {
        resolve(response);
    } else {
        reject()
    }

}).then((cats) => {
    //Synchronous code here
    console.log(cats)
}).catch(() => {})


//How can we determine what function is called when we resolve?
//We can use a .then() if the promise rejects() it will call the function in a .catch()

