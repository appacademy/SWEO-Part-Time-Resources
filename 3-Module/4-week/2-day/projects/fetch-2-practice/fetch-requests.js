/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
async function getStatus(){
    const url = '/products';
    //no options needed, it's a get request
    const data = await fetch(url);
    return data.status;
}
// getStatus().then(data => console.log(data)) //need to enter this into the browser to get the return value from getStatus (note that async functions return a PROMISE that wraps around the functions' return value)


/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here



/* =================== 3. Print the Content-Type Header =================== */

// Your code here



/* ============== 4. Print the body of the response as text =============== */

// Your code here