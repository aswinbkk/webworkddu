const express = require('express')
const Router = express.Router()
const BlogController = require('../controllers/blogController')

Router.post('/createblog',BlogController.CreateBlog)
Router.get('/allpost',BlogController.getposts)
Router.get('/updatepost',BlogController.updatepost)
Router.get('/deletepost',BlogController.deletepost)


module.exports = Router