const express = require("express");
const app = express();
const port = 5000;
const users = []

// add in the missing piece of code to make this post request work for the post request at /users. Try running it first to see what happens.

/*
INPUT:
go on POSTMAN and make a POST request with the body of: 
    {
        "name":"ava"
    }

OUTPUT:
if fixed correctly, your response from the server should be a json string of:

    "ava has been added"

*/


app.post("/", (req,res)=>{
    console.log("request body data:", req.body); //hint, what is this logging in the terminal when we make the request?
    const userName = req.body.name;
    users.push(userName);
    res.json(`${userName} has been added`);
})


// generic wild card for 404
app.get("*", (req,res)=>{
    // console.log(req.params); //{ '0': '/dfdf' }
    // console.log(req.originalUrl); ///dfdf
    res.status(404);
    res.set("Content-Type", "text/plain");
    res.send("not found");
})

app.listen(port, ()=>{
    console.log("listening on port", port)
})