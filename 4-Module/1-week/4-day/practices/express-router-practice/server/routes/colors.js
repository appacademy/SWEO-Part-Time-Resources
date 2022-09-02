const express = require("express")
const router = express.Router(); //think of this as the "mini" app 

router.get("/", (req,res)=>{
    res.json("GET /colors");
})

router.get("/:name", (req,res)=>{
    const nameId = req.params.name;
    res.json(`GET /colors/${nameId}`);
})

router.post("/", (req,res)=>{
    res.json(`POST /colors`);
})

// exporting the mini app to be connected to the main app (adding the machine onto the assembly line)
module.exports = router;