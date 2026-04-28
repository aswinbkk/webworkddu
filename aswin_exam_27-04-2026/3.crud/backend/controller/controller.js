const user = require('../model/model');

const createPost = async (req,res) => {
    const {name,description} = req.body;

    try {
        const newData = await new user({
            name,
            description
        });
        await newData.save();
        res.status(203).json({msg:`created succesfully data is :${newData}`});

    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

const getPosts = async (req,res) => {
    try {
        const getData = await user.find().sort({createdAt: -1});
        res.status(200).json({msg:"all post", data:getData});
    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

const updatePost = async (req,res) => {
    try {
        const {id} = req.param;
        const updateData = await user.findByIdAndUpdate(id,req.body, {returnDocument: 'after'});
        if (!updateData) {
            return res.status(404).json({msg: "post not fonud"});
        }
        res.status(200).json({msg:"post updated", data:updateData});
    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

const deletePost = async (req,res) => {
    try {
        const {id} = req.param;
        const deleteData = await user.findByIdAndDelete(id);
        if (!deleteData) {
           return res.status(404).json({msg:"post not fonud"});
        }
        res.status(200).json({msg:"post deleted"});
    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

module.exports = {createPost,getPosts,updatePost,deletePost};
