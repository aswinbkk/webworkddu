const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/postController')

postRouter.post('/createpost',postController.createPost)
postRouter.get('/allpost',postController.getPosts)
postRouter.put('/updatepost/:id',postController.updatePost)
postRouter.delete('/deletepost/:id',postController.deletePost)


module.exports = postRouter