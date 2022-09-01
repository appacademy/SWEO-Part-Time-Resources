const express = require("express");
const app = express();
const port = 5000;


app.use(express.json()) // for parsing application/json

// :page --> this is the url parameter, not the value!! So the actual url value of "/fruits", "fruits" will be what the parameter value is.
app.get("/:page", (req,res)=>{
    const page = req.params.page
    console.log("page:", page);
    res.send(page)
   
})

app.get("/fruits", (req,res)=>{

    res.json(["apple", "watermelon", "cherry", "banana", "grape"])
})

app.get("/users/:userId", (req, res)=>{
    console.log("req.params:", req.params); //follow the data, determine what data we are working with here //{ userId: '50' }
    const userId = req.params.userId;

    // our status code we want to send back
    res.status(200);
    res.send(`User details for userId: ${userId}`)

})

app.get("/", (req,res)=>{
    console.log("hello from root using nodemon");
    // res.send("this was sent using `send`"); //.send will send a response with data that matches the data that we are sending

    res.json("this is json data")
    //.json will send a response in json
})

app.post("/", (req,res)=>{
    console.log("POST / request");
    const reqBodyData = req.body;
    console.log("reqBodyData:", req.body);
    // explicitly tell what data to "send", we need to set a header with content type of our desire.
    res.set("Content-Type", "text/plain")
    res.send("we received your POST request w/ JSON data")
})




// any path that doesn't match the route path above, will then hit this one here
app.get("*", (req, res)=>{
    res.status(404);
    res.set("content-type", "text/plain");
    res.set("random-header", "random header value");
    res.send("Not Found");
})

app.listen(5000, ()=>{
    console.log("listening on port:", port)
})