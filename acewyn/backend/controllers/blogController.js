const Blog = require('../models/blogModel')

const createBlog = async (req, res) => {
    const {title, description, author} = req.body
}

try {
    const newData = await new Blog({
        title,
        discription,
        author
    })
    await newData.save();
    res.status(200).json({msg:'create successfully',})
} catch (error) {
    res.status(500).json({msg:'source successfully',})
}
module.exports={createBlog}