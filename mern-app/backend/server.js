require('dotenv').config();
const express = require('express');
const blogRoutes = require("./routes/blogRoutes")
const serverPort = process.env.PORT
const connectDatabase = require('./config/db');
const app = express();

connectDatabase();

const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use("/blog", blogRoutes);

app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});