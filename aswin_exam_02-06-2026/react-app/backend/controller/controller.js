const User = require('../model/model');

const createPost = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newData = await new User({
            name,
            description
        });
        await newData.save();
        res.status(203).json({ msg: `Record has been created successfully` });

    } catch (error) {
        res.status(500).json({ msg: "server error" });
    }
};

const readPosts = async (req, res) => {
    try {
        const getData = await User.find().sort({ createdAt: -1 });
        res.status(200).json({ msg: `Record has been read successfully`, data:getData });
    } catch (error) {
        res.status(500).json({ msg: "server error" });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = await User.findByIdAndUpdate(id, req.body, { returnDocument: 'after' });
        if (!updateData) {
            return res.status(404).json({ msg: "post not fonud" });
        }
        res.status(200).json({ msg: `Record has been updated successfully` });
    } catch (error) {
        res.status(500).json({ msg: "server error" });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteData = await User.findByIdAndDelete(id);
        if (!deleteData) {
            return res.status(404).json({ msg: "post not fonud" });
        }
        res.status(203).json({ msg: `Record has been deleted successfully` });
    } catch (error) {
        res.status(500).json({ msg: "server error" });
    }
};

module.exports = { createPost, readPosts, updatePost, deletePost };

