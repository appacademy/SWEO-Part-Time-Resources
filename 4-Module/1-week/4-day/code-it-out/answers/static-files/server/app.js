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

// app.use will let us mount a middle into our app (add that into the app)
// 1st arg) does the path start with the /static (this is where we will go to the resource), 2nd arg) then go ahead and find the resource in this location
app.use('/static', express.static('public'))
// app.use('/static', express.static('./public/css')) //try: http://localhost:5000/static/styles.css

app.listen(port, ()=>{
    console.log("listening on port:", port);
})