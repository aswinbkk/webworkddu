const mongoose = require('mongoose');

const mongoSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('user', mongoSchema);

module.exports = User;
