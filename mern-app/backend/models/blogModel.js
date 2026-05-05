// Import mongoose to define schema and model
const mongoose = require('mongoose');

// Define schema for Blog collection
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // Title is mandatory
    },

    description: {
        type: String,
        required: true // Description/content is required
    },

    author: {
        type: String,
        required: true // Author name is required
    }

}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create a model based on the schema (represents 'blogs' collection in MongoDB)
const BlogModel = mongoose.model('Blog', blogSchema);

// Export the model so it can be used in controllers/routes
module.exports = BlogModel;