const express = require("express") 
const app = express(); 
const port = 5000;


app.get("/", (req,res)=>{
    console.log("route / hit");
    res.send("request to / received");
})

const router = express.Router();

router.get('/:page', (req, res) => { 
    res.send(`1) Valid route!!!`)
 });

//1) Is `localhost:5000/posts/apple` a valid route to the `posts` router? What will be the response output? (try first without running server)
/*
INPUT: localhost:5000/posts/apple
OUTPUT: ---your answer---
*/


//2) Is `localhost:5000/posts` a valid route to the `posts` router? What will be the response output?
/*
INPUT: localhost:5000/posts
OUTPUT: ---your answer---
*/

app.use('/posts', router);

app.listen(port, ()=>{
    console.log("listening on port:", port);
})