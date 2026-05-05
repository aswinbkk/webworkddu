// Loads environment variables from .env file into process.env
require('dotenv').config();
// Import mongoose library for MongoDB connection
const mongoose = require('mongoose');

// Function to establish connection to MongoDB database
const connectDatabase = async () => {
    try {
        // Attempt to connect using the MongoDB connection string from environment variables
        const dbConnection = await mongoose.connect(process.env.MONGO_URL);

        // Log success message along with host info for confirmation
        console.log(`MongoDB connected successfully: ${dbConnection.connection.host}`);
    } catch (connectionError) {
        // Catch and log any errors that occur during connection
        console.error('Error connecting to MongoDB:', connectionError.message);

        // Exit the process with failure (optional but recommended in production)
        process.exit(1);
    }
};

// Export the function so it can be used in other parts of the application
module.exports = connectDatabase;