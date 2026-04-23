const user = require('../models/userModel')

const createUser = async (req,res) => {
    const {name,email,password,phone,dob} = req.body

    try {
        const newData = await new user({
            name,
            email,
            password,
            phone,
            dob
        })
        await newData.save()
        res.status(203).json({msg:`user created succesfully data is :${newData}`})

    } catch (error) {
        res.status(500).json({msg:"server error"})
    }
}

module.exports = {createUser}