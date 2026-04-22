const express = require('express')
const Router = express.Router()
const BlogController = require('../controllers/blogController')

Router.post('/createblog',BlogController.CreateBlog)
Router.get('/allpost',BlogController.getposts)
Router.put('/updatepost',BlogController.updatepost)
Router.delete('/deletepost',BlogController.deletepost)


module.exports = Router