const Blog = require('../models/blogModel')



const CreateBlog = async(req,res)=>{

    const {title,description,author}= req.body

    try {
        const newdata = await new Blog({
            title,
            description,
            author
        })
        await newdata.save()
        res.status(203).json({msg: `created succesfully data is :${newdata}`})
        
    } catch (error) {
        res.status(500).json({msg:"server error"})
    }
}
const getdata = async()=>{

}
module.exports= {CreateBlog,getdata}