const express = require("express") 
const app = express(); 
const port = 5000;

app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})

//write code that will mount a middleware to server static files w/ a prefix path of "/static"
// start the server and then enter this url: 

// app.use('/static', express.static('public'))

app.listen(port, ()=>{
    console.log("listening on port:", port);
})