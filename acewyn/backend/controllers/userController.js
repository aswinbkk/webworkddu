const user = require('../models/userModel')
const bcrypt = require('bcrypt')
const saltround = 10;

const createUser = async (req,res) => {
    const {name,email,password,phone,dob} = req.body

    try {
        const user= await user.findone({email});
        if(user){
            return res.status(400).json({msg:"user exists"})
        }
        const hashPassword = await bcrypt.hash(password,saltround)
        const newData = await new user({
            name,
            email,
            password:hashPassword,
            phone,
            dob
        });
        await newData.save();
        res.status(203).json({msg:`user created succesfully data is :${newData}`});

    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

module.exports = {createUser};