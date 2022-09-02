const express = require("express");

// simple router (mini app) example. 
// instance of the router
const router = express.Router(); //think of router as our "mini app" (app object api)

// here we are attaching a get route handler to THE ROUTER (not the app);
router.get('/:page', (req, res) => {
    res.send(`1) this is from the router with the path of /posts/${req.params.page}`)
});




module.exports = router;