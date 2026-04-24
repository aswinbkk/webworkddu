const user = require('../models/userModel')
const bcrypt = require('bcrypt')
const saltround = 10;

const createUser = async (req,res) => {
    const {name,email,password,phone,dob} = req.body

    try {
        const existUser= await user.findOne({email});
        if(existUser){
            return res.status(400).json({msg:"user exists"})
        }
        const hashPassword = await bcrypt.hash(password,saltround)
        const newUser = await new user({
            name,
            email,
            password:hashPassword,
            phone,
            dob
        });
        await newUser.save();
        res.status(203).json({msg:`user created succesfully data is :${newUser}`});

    } catch (error) {
        res.status(500).json({msg:"server error"});
    }
};

const login = async(req,res)=>{
    const {email,password}= req.body;
    try {
        const existUser= await user.findOne({email})
        if (!existUser){
            return res.status(404).json({msg:"no user registered"})
        }
        const matchPassword= await bcrypt.compare(password,existUser.password)
        if(!matchPassword){
            return res.status(404).json({msg:"invalid credintial"})
        }
        res.status(200).json({msg:"login successfully"})
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({msg:"server error"})
    }
}

module.exports = {createUser,login};