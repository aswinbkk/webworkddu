const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true 
    },
    author:
    {
        type:String,
        required:true
    }
},{timestamps:true})

const post = mongoose.model('posts', postSchema)

module.exports= post
