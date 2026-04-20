const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});