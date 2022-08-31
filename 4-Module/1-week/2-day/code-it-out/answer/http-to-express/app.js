const express = require("express");
// console.log(express);
const app = express();
// console.log(app);
const port = 5000;

app.use(express.json())

app.get("/users/:userId", (req,res )=>{
    console.log("-------req:", req);
    console.log("req params:", req.params)
    const userId = req.params.userId; //parse userId from parameters to grab the exact user id
    res.status(200);
    // -----------sending plain text--------
    // res.set("content-type", "text/plain")
    // res.send(`User details for userId: ${userId}`)
    // -----------sending json--------
    res.json(`User details in JSON for userId: ${userId}`)
})

// wildcard path, anything that doesn't match above, will hit this route here.
app.get("*", (req,res)=>{
    res.status(404)
    res.send("not found");
} )


app.listen(port, ()=>{
    console.log("listening on port:", port )
})