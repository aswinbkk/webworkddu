const express = require('express')
const Router = express.Router()
const Controller = require('../controller/controller')

Router.post('/create', Controller.createPost)
Router.get('/read', Controller.readPosts)
Router.put('/update/:id', Controller.updatePost)
Router.delete('/delete/:id', Controller.deletePost)


module.exports = Router