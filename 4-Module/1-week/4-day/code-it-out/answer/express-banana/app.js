const apple = require("express") //is it possible to put this the express module in a variable called "apple"? If so, why? 
// this is because it is an unnamed export
const app = apple(); //invoking the exported apple to initialize the app
const port = 5000;


// try to setup the server from scratch and see if we can install it and run it.

app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})

app.listen(port, ()=>{
    console.log("listening on port:", port);
})