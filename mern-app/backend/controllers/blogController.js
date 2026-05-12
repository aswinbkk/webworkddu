const Blog = require('../models/blogModel');

const createBlog = async (req,res)=>{
    const{title,description,author} = req.body;
    try {
        const newData = await new Blog({
            title,description, author
        })
        await newData.save();
        res.status(200).json({msg:"Blog created successfully", data:newData})
    } catch (error) {
        res.status(500).json({msg:"Server Error", error});
    }
}

const getAllBlog = async (req, res)=>{
    try {
        const allBlog = await Blog.find().sort({createdAt:-1})
        res.status(200).json({msg:"All post", data: allBlog})
    } catch (error) {
        res.status(500).json({msg:"Server Error", error})
    }
}

module.exports = {
    createBlog,
    getAllBlog
}