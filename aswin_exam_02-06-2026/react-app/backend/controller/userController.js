const User = require('../model/userModel');

const createUser = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newUser = await new User({
            name,
            description
        });
        await newUser.save();
        res.status(203).json({ msg: "Record has been created successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
};

const readUsers = async (req, res) => {
    try {
        const getUsers = await User.find().sort({ createdAt: -1 });
        res.status(200).json({ msg: "Record has been read successfully", data:getUsers });
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const getUsers = await User.findByIdAndUpdate(id, req.body, { returnDocument: 'after' });
        if (!getUsers) {
            return res.status(404).json({ msg: "Record not found" });
        }
        res.status(200).json({ msg: "Record has been updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: "server error" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const getUsers = await User.findByIdAndDelete(id);
        if (!getUsers) {
            return res.status(404).json({ msg: "Record not found" });
        }
        res.status(203).json({ msg: "Record has been deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = { createUser, readUsers, updateUser, deleteUser };

