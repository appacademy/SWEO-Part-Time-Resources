const express = require("express") 
const app = express(); 
const port = 5000;

app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})

// task: add the code necessary so we can access the router and go to: http://localhost:5000/posts/apple (hint: what is the prefix before /:page?)

const postsRouter = require("./routes/posts.js");

// -----your code here-----
// by default our "mini-app" is not mounted onto our express application (what happens if you have a big machine and its not mounted on the conveyer belt?), so it's not going to do anything. Therefore we need to mount it as a middleware
// if the path starts with /posts (/posts being our resource entry point), go to this router first and prioritize it.
app.use("/posts", postsRouter);

// 2) if we finish early, refactor this by putting it in its own "router" folder and file of "posts.js". Make sure to remember to export and mount the router onto the express app!

app.listen(port, ()=>{
    console.log("listening on port:", port);
})