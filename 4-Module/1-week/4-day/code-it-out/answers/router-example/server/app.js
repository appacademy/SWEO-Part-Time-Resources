const express = require("express") 
const app = express(); 
const port = 5000;

app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})

// go ahead and import the router under "./routes/posts.js"
const postsRouter = require("./routes/posts.js")

// task: add the code necessary so we can access the router, and mount it to the express application and go to: http://localhost:5000/posts/apple (hint: what is the prefix before /:page?)
// -----your code here-----
// we use `app.use` in order to mount our router (attaching the router as part of the app now)
// first parameter is the prefix path that starts with /posts, second parameter is actual location of the router for the rest of the path
app.use("/posts", postsRouter);

// 2) if we finish early, refactor this by putting it in its own "router" folder and file of "posts.js". Make sure to remember to export and mount the router onto the express app!

app.listen(port, ()=>{
    console.log("listening on port:", port);
})