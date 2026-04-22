const express = require('express')
const Router = express.Router()
const BlogController = require('../controllers/blogController')

Router.post('/createblog',BlogController.CreateBlog)
Router.get('/allpost',BlogController.getposts)
Router.put('/updatepost/:id',BlogController.updatepost)
Router.delete('/deletepost/:id',BlogController.deletepost)


module.exports = Router