require('dotenv').config();
const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected successfully: ${dbConnection.connection.host}`);
    } catch (connectionError) {
        console.error('Error connecting to MongoDB:', connectionError.message);
    }
};

module.exports = connectDatabase;