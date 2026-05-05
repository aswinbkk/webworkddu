// Load environment variables from .env file
require('dotenv').config();

// Import Express framework
const express = require('express');
// Create an Express application instance
const app = express();

// Define the port from environment variables or fallback to 5000
const serverPort = process.env.PORT || 5000;

// Import the database connection function
const connectDatabase = require('./config/db');

// Connect to MongoDB before starting the server
connectDatabase();

// Start the Express server and listen on the defined port
app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});