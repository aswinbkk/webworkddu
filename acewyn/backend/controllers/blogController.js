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

const getposts = async(req,res)=>{
    try{
        const posts=await Blog.find().sort({createdAt:-1})
        res.status(200).json({msg:"all post", data:posts})
    } catch(error){
        res.status(500).json({msg:"server error"})
    }
}

const updatepost = async(req,res)=>{
    try{
        const {id}=req.params
        const updatepost = await Blog.findByIdAndUpdate(id,req.body,{new:true})
        if(!updatepost){
        res.status(404).json({msg:"post not fonud"})
        }
        res.status(200).json({msg:"post updated", updateddata : updatepost})
    } catch(error){
        res.status(500).json({msg:"server error"})
    }
}

const deletepost = async(req,res)=>{
    try{
        const {id}=req.params
        const deletepost = await Blog.findByIdAndDelete(id,req.body,{new:true})
        if(!deletepost){
        res.status(404).json({msg:"post not fonud"})
        }
        res.status(200).json({msg:"post deleted", deleteddata : deletepost})
    } catch(error){
        res.status(500).json({msg:"server error"})
    }
}

module.exports= {CreateBlog, getposts, updatepost, deletepost}
