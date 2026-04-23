const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();
const postRoute= require('./routes/postRoute');
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use('/post',postRoute);
app.use('/user',userRoute);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});