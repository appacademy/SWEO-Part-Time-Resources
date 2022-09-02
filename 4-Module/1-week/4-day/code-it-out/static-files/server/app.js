const express = require("express") 
const app = express(); 
const port = 5000;

app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})
// start the server: `npm run dev`
//write code that will mount a middleware to server static files w/ a prefix path of "/static"
// start the server and then enter this url or anything in the public folder: http://localhost:5000/static/code-app.js

// your code here:
// this might be helpful: https://expressjs.com/en/starter/static-files.html


app.listen(port, ()=>{
    console.log("listening on port:", port);
})