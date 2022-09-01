const express = require("express") 
const app = express(); 
const port = 5000;

app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})


// start server: npm run dev
// simple router (mini app) example. Why
const router = express.Router();
router.get('/:page', (req, res) => { 
    res.send(`this is from the router with the path of /post/${req.params.page}`)
 });
// task: add the code necessary so we can access the router and go to: http://localhost:5000/post/apple (hint: what is the prefix before /:page?)
// -----your code here-----

app.listen(port, ()=>{
    console.log("listening on port:", port);
})