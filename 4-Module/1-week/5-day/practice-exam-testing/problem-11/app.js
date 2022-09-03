const express = require("express"); //Import in the express module

const app = express(); //this is where we INITIALIZE IT our unnaned express app
const port = 5000;

console.log("problem 11");

const router = express.Router();
router.get('/hello', (req, res) => { 
    res.send("problem 11 correct path")
 });

app.use('/world', router);


app.listen(port, () => {
    console.log("listening on port:", port);
})