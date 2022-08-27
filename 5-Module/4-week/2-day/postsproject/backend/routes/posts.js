const postRouter = require('express').Router()
const { Post } = require('../db/models')

postRouter.get('/', async (req, res) => {
    const posts = await Post.findAll()
    const obj = {}
    posts.forEach(post => {
        obj[post.id] = post
    });
    res.json(obj)
})

postRouter.post('/new', async (req, res) => {
    console.log(req.body)
    const post = await Post.create(req.body)
    console.log(post)
    res.json(post)
})
postRouter.delete('/:id/delete', async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const post = await Post.findByPk(id)
    await post.destroy()
    res.json({ id })
})
postRouter.patch('/:id/edit', async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const {body} = req.body
    console.log(body)
    const post = await Post.findByPk(id)
    await post.update({body: body})
    res.json(post)
})
<<<<<<< HEAD:5-Module/4-week/2-day/postsproject/backend/routes/posts.js
=======

postRouter.patch('/:id/update', async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const post = await Post.findByPk(id)
    await post.update(req.body)
    res.json(post)
})

>>>>>>> 2022-Jan-W:5-Module/4-week/2-day/postAndComments/routes/posts.js
module.exports = postRouter

