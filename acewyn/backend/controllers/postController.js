const post = require('../models/postModel');

const createPost = async (req,res) => {
    const {title,description,author} = req.body;

    try {
        const newData = await new post({
            title,
            description,
            author
        });
        await newData.save();
        res.status(203).json({msg:`created succesfully data is :${newData}`});

    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

const getPosts = async (req,res) => {
    try {
        const getData = await post.find().sort({createdAt: -1});
        res.status(200).json({msg:"all post", data:getData});
    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

const updatePost = async (req,res) => {
    try {
        const {id} = req.params;
        const updateData = await post.findByIdAndUpdate(id,req.body, {returnDocument: 'after'});
        if (!updateData) {
            return res.status(404).json({msg: "post not fonud"});
        }
        res.status(200).json({msg:"post updated", updateddata:updateData});
    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

const deletePost = async (req,res) => {
    try {
        const {id} = req.params;
        const deleteData = await post.findByIdAndDelete(id);
        if (!deleteData) {
           return res.status(404).json({msg:"post not fonud"});
        }
        res.status(200).json({msg:"post deleted"});
    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

module.exports = {createPost,getPosts,updatePost,deletePost};
