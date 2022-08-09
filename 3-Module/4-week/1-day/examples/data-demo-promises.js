// promises are really great to handle something that takes really long in the background,
// like dowloading a high quality image from a different server,
// reading a file from a server,
// or reading user input since we might not know "when" it will be done.

// -------------creating the promise--------------
function fetchData(){
    return new Promise((resolve, reject)=>{
        // here we are going to emulate the server request however this is not real request
        // setTimeout(callback,delay) takes in a cb and delay then executes the cb after the delay has expired
        setTimeout(()=>{
            const receivedData = true;
            let data = "puppy!";
            if(receivedData === true){
                // once we receive the data, we will pass it along and this data will be the value of our promise after it exits the "pending state" and goes into the "resolved state"
                resolve(data);
            }
            else{
                const err ="Error 401 was unable to receive the data"
                reject(err)
            }
        }, 3000)
    })
}

// -------------consuming the promise--------------
// fetchData() will return a promise. Promise is an object that has a .then method
// .then will then take the return data of the promise and then we can execute a callback to do what we want with the data
fetchData()
    .then((data)=>{
        console.log("pet " + data);
        return data;
    }) //we need to pass the data in our callback
    .then((data)=>console.log("feed " + data)) 
    .catch(err=>console.log("haa sucker we didn't send you data"))

console.log("last comment");