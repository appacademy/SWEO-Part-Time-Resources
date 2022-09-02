const banana = require("express") //is it possible to put this the express module in a variable called "banana"? If so, why? 

// when we are importing in express, we are importing in an unnamed function that we can then put it into any variable.
const app = banana(); //invoking the exported unnamed function (banana) to initialize the app
const port = 5000;

app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})

app.listen(port, ()=>{
    console.log("listening on port:", port);
})