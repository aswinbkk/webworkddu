const express = require ('express')
const Router = express.Router()
const BlogControll = require('../controllers/Blog');
Router.post('/blog',BlogControll.CreateBlog);
module.express = Router;
