const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const userRouter = require('./router/userRouter');

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});