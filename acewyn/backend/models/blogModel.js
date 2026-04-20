const mongoose = require('mongoose')
const Blogschema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    }, {Timestamp : true},

    description:{
        type : String,
        required : true
    }, {Timestamp : true},

    author:{
        type : String,
        require : true
    }, {Timestamp : true}
})

const Blog = Mongoose.Model('blog',Blogschema)

module.exports = Blogschema