// if we are exporting this router to its own module, we need to also import express
const { application } = require("express");
const express = require("express");

// 1) start server: npm run dev
// simple router (mini app) example. Why

const router = express.Router();
const subPosts = require("./sub-post.js");

// need to enter /posts first before we can access /sub-posts
// try: http://localhost:5000/posts/sub-posts
router.use("/sub-posts", subPosts)

router.get('/hello-post', (req, res) => {
    res.send(`did we ever hello-post?`)
});

// remember that /:page --> :page is a temporary url parameter that will get replaced with the actual path value for it. This is not specific, it's pretty general, we want to move it to the bottom
router.get('/:page', (req, res) => {
    res.send(`this is from the router with the path of /posts/${req.params.page}`)
});


module.exports = router;