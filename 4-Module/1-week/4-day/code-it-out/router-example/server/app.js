const express = require("express") 
const app = express(); 
const port = 5000;

app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})


// 1) start server: npm run dev
// simple router (mini app) example. Why
const router = express.Router();
router.get('/:page', (req, res) => { 
    res.send(`this is from the router with the path of /posts/${req.params.page}`)
 });
// task: add the code necessary so we can access the router and go to: http://localhost:5000/posts/apple (hint: what is the prefix before /:page?)
// -----your code here-----

// 2) if we finish early, refactor this by putting it in its own "router" folder and file of "posts.js". Make sure to remember to export and mount the router onto the express app!

app.listen(port, ()=>{
    console.log("listening on port:", port);
})