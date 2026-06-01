const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();
const route = require('./router/router');

app.use(express.json());
app.use('/home', route);

app.listen(3000, () => {
  console.log(`Server is running`);
});