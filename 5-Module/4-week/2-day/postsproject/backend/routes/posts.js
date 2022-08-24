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
    const post = await Post.create(req.body)
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
module.exports = postRouter

