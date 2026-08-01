import { config } from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/userRouter.js";

config();

const app = express();

app.use(express.json());

app.use("/users", router);

await connectDB();

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});